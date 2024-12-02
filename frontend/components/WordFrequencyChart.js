import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const WordFrequencyChart = ({ descriptions }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (!descriptions || descriptions.length === 0) return;

    // List of common stop words to exclude
    const stopWords = new Set([
      "the", "is", "and", "a", "an", "of", "for", "to", "this", "in", "about", "s", "on", "has", "from", 
      "as", "with", "by", "that", "at", "it", "be", "are", "was", "were", "or", "which", "have", "has", 
      "will", "who", "not"
    ]);

    // Preprocess descriptions to count word frequencies
    const wordFrequency = {};
    descriptions.forEach((description) => {
      const words = description.toLowerCase().split(/\W+/);
      words.forEach((word) => {
        if (word && !stopWords.has(word)) {
          wordFrequency[word] = (wordFrequency[word] || 0) + 1;
        }
      });
    });

    // Convert frequency object into an array of {word, count}
    const wordData = Object.entries(wordFrequency)
      .map(([word, count]) => ({ word, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10); // Get the top 10 most frequent words

    // Set dimensions
    const margin = { top: 20, right: 30, bottom: 50, left: 50 };
    const width = 800;
    const height = 400;
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Clear previous chart
    d3.select(chartRef.current).selectAll("*").remove();

    // Create the SVG container
    const svg = d3
      .select(chartRef.current)
      .attr("width", width)
      .attr("height", height);

    // Set up scales
    const x = d3
      .scaleBand()
      .domain(wordData.map((d) => d.word))
      .range([margin.left, chartWidth + margin.left])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(wordData, (d) => d.count)])
      .nice()
      .range([chartHeight + margin.top, margin.top]);

    // Add bars
    svg
      .selectAll(".bar")
      .data(wordData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.word))
      .attr("y", (d) => y(d.count))
      .attr("width", x.bandwidth())
      .attr("height", (d) => chartHeight + margin.top - y(d.count))
      .attr("fill", "steelblue")
      .on("mouseover", function () {
        d3.select(this).attr("fill", "orange");
      })
      .on("mouseout", function () {
        d3.select(this).attr("fill", "steelblue");
      });

    // Add x-axis
    svg
      .append("g")
      .attr("transform", `translate(0,${chartHeight + margin.top})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end");

    // Add y-axis
    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    // Add axis labels
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height - 10)
      .attr("text-anchor", "middle")
      .text("Words");

    svg
      .append("text")
      .attr("x", -height / 2)
      .attr("y", 15)
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .text("Frequency");
  }, [descriptions]);

  return <svg ref={chartRef}></svg>;
};

export default WordFrequencyChart;
