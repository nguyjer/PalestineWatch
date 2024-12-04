import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const PieChart = ({ supportGroups }) => {
	const chartRef = useRef();

	useEffect(() => {
		if (!supportGroups || supportGroups.length === 0) return;

		const cities = {};

		supportGroups.forEach((group) => {
			cities[group.city] = (cities[group.city] || 0) + 1;
		});

		const data = Object.entries(cities)
		.map(([city, count]) => ({city, count}))
		.sort((a, b) => b.count - a.count);

		const width = 800;
		const height = 400;
		const radius = Math.min(width, height) / 2;

		d3.select(chartRef.current).selectAll("*").remove();

		const svg = d3
			.select(chartRef.current)
			.attr("width", width)
			.attr("height", height)
			.attr("transform", `translate(${width / 2}, ${height / 2})`);

		const pie = d3.pie().value(d => d.count);
		const arc = d3.arc().innerRadius(0).outerRadius(radius);
		const color = d3.scaleOrdinal(d3.schemeCategory10);

		svg
		.selectAll("path")
		.data(pie(data))
		.enter()
		.append("path")
		.attr("d", arc)
		.attr("fill", (d, i) => color(i))
		.attr("stroke", white)
		.style("stroke-width", "2px");

		svg
		.selectAll("text")
		.data(pie(data))
		.enter()
		.append("text")
		.text(d => d.data.city)
		.attr("transform", d => `transform(${arc.centroid(d)})`)
		.style("text-anchor", "middle")
		.style("font-size", "12px")
		
	}, [supportGroups]);

	return <svg ref={chartRef}></svg>
};

export default PieChart;
