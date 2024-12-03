import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const AreasServedChart = ({ foodBanks }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (!foodBanks || foodBanks.length === 0) return;

    const areaCounts = {};
    foodBanks.forEach((bank) => {
      const areas = bank.areas_served.split(",").map((area) => area.trim());
      areas.forEach((area) => {
        areaCounts[area] = (areaCounts[area] || 0) + 1;
      });
    });

    const data = Object.entries(areaCounts)
      .map(([area, count]) => ({ area, count }))
      .sort((a, b) => b.count - a.count);

    const margin = { top: 20, right: 30, bottom: 100, left: 50 };
    const width = 800;
    const height = 400;
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    d3.select(chartRef.current).selectAll("*").remove();

    const svg = d3
      .select(chartRef.current)
      .attr("width", width)
      .attr("height", height);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.area))
      .range([margin.left, chartWidth + margin.left])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.count)])
      .nice()
      .range([chartHeight + margin.top, margin.top]);

    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.area))
      .attr("y", (d) => y(d.count))
      .attr("width", x.bandwidth())
      .attr("height", (d) => chartHeight + margin.top - y(d.count))
      .attr("fill", "steelblue")
      .on("mouseover", function (event, d) {
        d3.select(this).attr("fill", "orange");
        tooltip
          .style("visibility", "visible")
          .text(`${d.area}: ${d.count}`)
          .style("left", `${event.pageX + 5}px`)
          .style("top", `${event.pageY - 28}px`);
      })
      .on("mousemove", (event) => {
        tooltip
          .style("left", `${event.pageX + 5}px`)
          .style("top", `${event.pageY - 28}px`);
      })
      .on("mouseout", function () {
        d3.select(this).attr("fill", "steelblue");
        tooltip.style("visibility", "hidden");
      });

    svg
      .append("g")
      .attr("transform", `translate(0,${chartHeight + margin.top})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end");

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height - 10)
      .attr("text-anchor", "middle")
      .text("Areas Served");

    svg
      .append("text")
      .attr("x", -height / 2)
      .attr("y", 15)
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .text("Frequency");

    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background", "white")
      .style("border", "1px solid #ccc")
      .style("border-radius", "4px")
      .style("padding", "8px")
      .style("box-shadow", "0 2px 6px rgba(0,0,0,0.2)")
      .style("visibility", "hidden")
      .style("pointer-events", "none");
  }, [foodBanks]);

  return <svg ref={chartRef}></svg>;
};

export default AreasServedChart;
