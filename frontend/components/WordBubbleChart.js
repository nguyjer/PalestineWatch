import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import cloud from "d3-cloud";

const WordCloud = ({ nonprofits }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (!nonprofits || nonprofits.length === 0) return;

    const stopWords = new Set([
      "the", "is", "and", "a", "an", "of", "for", "to", "this", "in", "with", "on", "by", "at", "or"
    ]);

    const wordCounts = {};
    nonprofits.forEach((nonprofit) => {
      const words = nonprofit.main_services.toLowerCase().split(/\W+/);
      words.forEach((word) => {
        if (word && !stopWords.has(word)) {
          wordCounts[word] = (wordCounts[word] || 0) + 1;
        }
      });
    });

    const data = Object.entries(wordCounts)
      .map(([word, count]) => ({ text: word, size: count * 10 }))
      .sort((a, b) => b.size - a.size)
      .slice(0, 50);

    const width = 800;
    const height = 600;

    d3.select(chartRef.current).selectAll("*").remove();

    const layout = cloud()
      .size([width, height])
      .words(data)
      .padding(5)
      .rotate(() => (Math.random() > 0.5 ? 0 : 90))
      .fontSize((d) => d.size)
      .on("end", draw);

    layout.start();

    function draw(words) {
      const svg = d3
        .select(chartRef.current)
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

      svg
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", (d) => `${d.size}px`)
        .style("fill", () => d3.schemeCategory10[Math.floor(Math.random() * 10)])
        .attr("text-anchor", "middle")
        .attr("transform", (d) => `translate(${d.x},${d.y}) rotate(${d.rotate})`)
        .text((d) => d.text);
    }
  }, [nonprofits]);

  return <svg ref={chartRef}></svg>;
};

export default WordCloud;
