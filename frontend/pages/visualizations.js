import { useEffect } from "react";
import Head from "next/head";
import * as d3 from "d3";
import axios from "axios";

async function fetchCountries() {
  try {
    const response = await axios.get("https://api.palestinewatch.me/api/countries");
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

async function countriesMap() {
  // Fetch country data from backend
  const backendCountries = await fetchCountries();

  // Load GeoJSON file
  const worldData = await d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson");

  const container = document.getElementById("world-map");
  const containerWidth = container.offsetWidth;
  const width = containerWidth;
  const height = 600;

  const svg = d3
    .select("#world-map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const projection = d3.geoMercator().scale(150).translate([width / 2, height / 1.5]);
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
    .attr("fill", (d) =>
      backendCountries.includes(d.id) ? "#ff5722" : "#ccc" // Highlight backend countries
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
  useEffect(() => {
    countriesMap();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Head>
        <title>Visualizations</title>
        <meta name="description" content="Visualizations" />
        <link rel="icon" href="/watermelon.ico" />
      </Head>
      <h1 className="text-center mt-4 mb-4">Visualizations</h1>
      <div style={{ width: "50%", paddingTop: "20px" }}>
        <h2 className="text-center">Countries Map</h2>
        <div
          id="world-map"
          style={{
            width: "100%",
            height: "600px",
          }}
        ></div>
      </div>
    </div>
  );
}
