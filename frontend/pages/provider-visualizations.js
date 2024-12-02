import React, { useState, useEffect } from 'react';
import WordFrequencyChart from '../components/WordFrequencyChart';
import Head from 'next/head';
import axios from 'axios';
import * as d3 from 'd3';

// Function to fetch shelters
async function fetchShelters() {
  try {
    const response = await axios.get('https://api.homelessaid.me/homeless_shelters');
    const data = response.data.shelters;

    // Assuming counties_served provides FIPS codes, e.g., ["06001", "06075"]
    const uniqueFipsCodes = Array.from(new Set(data.flatMap((shelter) => shelter.counties_served)));
    return uniqueFipsCodes; // Return an array of unique FIPS codes
  } catch (error) {
    console.error('Error fetching shelters:', error);
    return [];
  }
}

// Function to draw the shelters map
async function sheltersMap() {
  // Fetch shelter data from backend
  const backendFipsCodes = await fetchShelters();

  // Load GeoJSON file for US counties
  const countyData = await d3.json(
    'https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json'
  );

  // Setup map container dimensions
  const container = document.getElementById('world-map');
  const containerWidth = container.offsetWidth;
  const width = containerWidth;
  const height = 600;

  // Create SVG
  const svg = d3
    .select('#world-map')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  // Setup Albers USA projection to fit US counties properly
  const projection = d3.geoAlbersUsa().scale(1000).translate([width / 2, height / 2]);
  const path = d3.geoPath().projection(projection);

  // Create a color scale for gradient (shades of blue)
  const colorScale = d3
    .scaleQuantize()
    .domain([0, 100]) // Assuming the maximum number of shelters a county can serve is 100
    .range(d3.schemeBlues[9]); // Using D3's Blues color scheme

  // Setup tooltip
  const tooltip = d3
    .select('#world-map')
    .append('div')
    .style('position', 'absolute')
    .style('background-color', 'white')
    .style('border', '1px solid #ccc')
    .style('padding', '5px')
    .style('border-radius', '5px')
    .style('box-shadow', '0 2px 4px rgba(0, 0, 0, 0.2)')
    .style('pointer-events', 'none')
    .style('opacity', 0);

  // Draw counties on the map
  svg
    .selectAll('path')
    .data(countyData.features)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('fill', (d) => colorScale(backendFipsCodes.includes(d.id) ? 10 : 0)) // Adjust value as per service level
    .attr('stroke', '#333')
    .on('mouseover', function (event, d) {
      tooltip
        .style('opacity', 1)
        .html(`<strong>${d.properties.NAME}</strong>`) // Display county name and state
        .style('left', `${event.pageX + 10}px`)
        .style('top', `${event.pageY + 10}px`);
      d3.select(this).attr('fill', '#FFD700'); // Highlight county on hover
    })
    .on('mousemove', function (event) {
      tooltip
        .style('left', `${event.pageX + 10}px`)
        .style('top', `${event.pageY + 10}px`);
    })
    .on('mouseout', function (event, d) {
      tooltip.style('opacity', 0);
      d3.select(this).attr('fill', (d) => colorScale(backendFipsCodes.includes(d.id) ? 10 : 0));
    });

  // Add legend/key for the color scale
  const legendWidth = 300;
  const legendHeight = 20;

  const legend = svg
    .append('g')
    .attr('class', 'legend')
    .attr('transform', `translate(${(width - legendWidth) / 2}, ${height - 50})`);

  // Draw the gradient
  const gradient = svg
    .append('defs')
    .append('linearGradient')
    .attr('id', 'gradient')
    .attr('x1', '0%')
    .attr('x2', '100%')
    .attr('y1', '0%')
    .attr('y2', '0%');

  d3.schemeBlues[9].forEach((color, i) => {
    gradient
      .append('stop')
      .attr('offset', `${(i / (d3.schemeBlues[9].length - 1)) * 100}%`)
      .attr('stop-color', color);
  });

  legend
    .append('rect')
    .attr('width', legendWidth)
    .attr('height', legendHeight)
    .style('fill', 'url(#gradient)');

  // Add labels for the legend
  const legendScale = d3
    .scaleLinear()
    .domain(colorScale.domain())
    .range([0, legendWidth]);

  const legendAxis = d3
    .axisBottom(legendScale)
    .ticks(10)
    .tickFormat((d) => `${d}`);

  legend
    .append('g')
    .attr('transform', `translate(0, ${legendHeight})`)
    .call(legendAxis);
}

export default function ProviderVisualizations() {
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    // Fetch shelter descriptions for word frequency visualization
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.homelessaid.me/homeless_shelters');
        const data = response.data.shelters;
        const descriptionList = data.map((item) => item.description);
        setDescriptions(descriptionList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Initialize the counties map
    sheltersMap();
  }, []);

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Head>
        <title>Visualizations</title>
        <meta name="description" content="Visualizations" />
        <link rel="icon" href="/watermelon.ico" />
      </Head>
      <h1 className="text-center mt-4 mb-4">Visualizations</h1>

      {/* Counties Map Section */}
      <div style={{ width: '80%', paddingTop: '20px', marginBottom: '40px' }}>
        <h2 className="text-center">Counties Served by Homeless Shelters</h2>
        <div
          id="world-map"
          style={{
            width: '100%',
            height: '600px',
            display: 'flex',
            justifyContent: 'center',
          }}
        ></div>
      </div>

      {/* Word Frequency Chart Section */}
      <div style={{ width: '80%', paddingTop: '20px' }}>
        <h2 className="text-center">Most Commonly Referenced Words in Shelter Descriptions</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <WordFrequencyChart descriptions={descriptions} />
        </div>
      </div>
    </div>
  );
}
