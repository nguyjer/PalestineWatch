import React, { useState, useEffect } from "react";
import WordFrequencyChart from "../components/WordFrequencyChart";
import Head from "next/head";
import * as d3 from "d3";
import axios from "axios";

async function fetchCountries() {
  try {
    const response = await axios.get(
      "https://api.palestinewatch.me/api/countries"
    );
    const data = response.data;

    const uniqueCountries = Array.from(
      new Map(data.map((country) => [country.coa_iso, country])).values()
    );
    return uniqueCountries.map((country) => country.coa_iso);
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
}

async function fetchGroups() {
  try {
    const response = await axios.get(
      "https://api.palestinewatch.me/api/support-groups"
    );
    const data = response.data;

    const groupCounts = data.reduce((counts, group) => {
      const state = group.state || "Unknown"; // Use empty string if city is missing
      counts[state] = (counts[state] || 0) + 1; // Increment the count for this city
      return counts;
    }, {});

    return groupCounts; // Return an array of unique county names
  } catch (error) {
    console.error("Error fetching shelters:", error);
    return [];
  }
}

// Function to draw the shelters map
async function groupsMap() {
  // Fetch group data from backend
  const groupsUntranslate = await fetchGroups(); // Assumes backendGroups keys are state abbreviations
  const [stateData, abbreviationToName] = await Promise.all([
    d3.json("/geostate.json"),
    d3.json(
      "https://gist.githubusercontent.com/shawnbot/ab11ace1bafa23be290c193049a71cb5/raw/f5e9c2788d2221fe4afe1930567c2cbe60c7e77a/states-object.json"
    ), // Mapping file: {"AL": "Alabama", "AK": "Alaska", ...}
  ]);

  // Convert backendGroups to use full state names
  const backendGroups = Object.entries(groupsUntranslate).reduce(
    (acc, [abbr, count]) => {
      const stateName = abbreviationToName[abbr];
      if (stateName) {
        acc[stateName] = count;
      }
      return acc;
    },
    {}
  );
  const filteredFeatures = stateData.features.filter(
    (feature) =>
      feature.geometry.type === "Polygon" ||
      feature.geometry.type === "MultiPolygon"
  );

  const container = document.getElementById("US-map");
  const width = container.offsetWidth;
  const height = 600;

  const svg = d3
    .select("#US-map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const projection = d3
    .geoAlbersUsa()
    .scale(1300)
    .translate([width / 2, height / 2]);
  const path = d3.geoPath().projection(projection);

  const maxGroupCount = d3.max(Object.values(backendGroups)) || 1;

  const colorScale = d3
    .scaleSequential(d3.interpolatePurples)
    .domain([0, maxGroupCount]);

  const tooltip = d3
    .select("#US-map")
    .append("div")
    .style("position", "absolute")
    .style("background-color", "white")
    .style("border", "1px solid #ccc")
    .style("padding", "5px")
    .style("border-radius", "5px")
    .style("box-shadow", "0 2px 4px rgba(0, 0, 0, 0.2)")
    .style("pointer-events", "none")
    .style("opacity", 0);

  svg
    .selectAll("path")
    .data(filteredFeatures)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("fill", (d) => colorScale(backendGroups[d.properties.NAME] || 0))
    .attr("stroke", "#333")
    .on("mouseover", function (event, d) {
      const stateName = d.properties.NAME;
      const groupCount = backendGroups[stateName] || 0;
      tooltip
        .style("opacity", 1)
        .html(`<strong>${stateName}</strong><br>Support Groups: ${groupCount}`)
        .style("left", `${event.pageX + 10}px`)
        .style("top", `${event.pageY + 10}px`);
      d3.select(this).attr("fill", "#FFD700");
    })
    .on("mousemove", function (event) {
      tooltip
        .style("left", `${event.pageX + 10}px`)
        .style("top", `${event.pageY + 10}px`);
    })
    .on("mouseout", function (event, d) {
      tooltip.style("opacity", 0);
      d3.select(this).attr("fill", (d) =>
        colorScale(backendGroups[d.properties.NAME] || 0)
      );
    });
  // Add legend/key for the color scale
  const legendWidth = 300;
  const legendHeight = 20;

  const legend = svg
    .append("g")
    .attr("class", "legend")
    .attr(
      "transform",
      `translate(${(width - legendWidth) / 2 + 140}, ${height - 40})`
    );

  // Draw the gradient
  const gradient = svg
    .append("defs")
    .append("linearGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("x2", "100%")
    .attr("y1", "0%")
    .attr("y2", "0%");

  d3.schemePurples[9].forEach((color, i) => {
    gradient
      .append("stop")
      .attr("offset", `${(i / (d3.schemePurples[9].length - 1)) * 100}%`)
      .attr("stop-color", color);
  });

  legend
    .append("rect")
    .attr("width", legendWidth)
    .attr("height", legendHeight)
    .style("fill", "url(#gradient)");

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
    .append("g")
    .attr("transform", `translate(0, ${legendHeight})`)
    .call(legendAxis);
}

async function countriesMap() {
  // Fetch country data from backend
  const backendCountries = await fetchCountries();

  // Load GeoJSON file
  const worldData = await d3.json(
    "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
  );

  const container = document.getElementById("world-map");
  const containerWidth = container.offsetWidth;
  const width = containerWidth;
  const height = 600;

  const svg = d3
    .select("#world-map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const projection = d3
    .geoMercator()
    .scale(150)
    .translate([width / 2, height / 1.5]);
  const path = d3.geoPath().projection(projection);

  const tooltip = d3
    .select("#world-map")
    .append("div")
    .style("position", "absolute")
    .style("background-color", "white")
    .style("border", "1px solid #ccc")
    .style("padding", "5px")
    .style("border-radius", "5px")
    .style("box-shadow", "0 2px 4px rgba(0, 0, 0, 0.2)")
    .style("pointer-events", "none")
    .style("opacity", 0);

  // Draw countries
  svg
    .selectAll("path")
    .data(worldData.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr(
      "fill",
      (d) => (backendCountries.includes(d.id) ? "#ff5722" : "#ccc") // Highlight backend countries
    )
    .attr("stroke", "#333")
    .on("mouseover", function (event, d) {
      tooltip
        .style("opacity", 1)
        .html(`<strong>${d.properties.name}</strong>`) // Display country name
        .style("left", `${event.pageX + 10}px`)
        .style("top", `${event.pageY + 10}px`);
      d3.select(this).attr("fill", "#FFD700"); // Highlight country on hover
    })
    .on("mousemove", function (event) {
      tooltip
        .style("left", `${event.pageX + 10}px`)
        .style("top", `${event.pageY + 10}px`);
    })
    .on("mouseout", function (d) {
      tooltip.style("opacity", 0);
      d3.select(this).attr("fill", (d) =>
        backendCountries.includes(d.id) ? "#ff5722" : "#ccc"
      );
    });
}

export default function Visualizations() {
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    // Fetch news descriptions for word frequency visualization
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.palestinewatch.me/api/news");
        const data = await response.json();
        const descriptionList = data.map((item) => item.description);
        setDescriptions(descriptionList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Initialize the countries map
    countriesMap();
    groupsMap();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Head>
        <title>Visualizations</title>
        <meta name="description" content="Visualizations" />
        <link rel="icon" href="/watermelon.ico" />
      </Head>
      <h1 className="text-center mt-4 mb-4">Visualizations</h1>

      {/* Countries Map Section */}
      <div style={{ width: "80%", paddingTop: "20px", marginBottom: "40px" }}>
        <h2 className="text-center">Countries Map</h2>
        <div
          id="world-map"
          style={{
            width: "100%",
            height: "600px",
            display: "flex",
            justifyContent: "center",
          }}
        ></div>
      </div>

      {/* Word Frequency Chart Section */}
      <div style={{ width: "80%", paddingTop: "20px" }}>
        <h2 className="text-center">
          Most Commonly Referenced Words in News Descriptions
        </h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <WordFrequencyChart descriptions={descriptions} />
        </div>
      </div>
      <div style={{ width: "80%", paddingTop: "20px", marginBottom: "40px" }}>
        <h2 className="text-center">U.S. Support Groups Map</h2>
        <div
          id="US-map"
          style={{
            width: "100%",
            height: "600px",
            display: "flex",
            justifyContent: "center",
          }}
        ></div>
      </div>
    </div>
  );
}
