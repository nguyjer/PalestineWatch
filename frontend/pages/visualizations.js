import Head from "next/head";
import React, { useState, useEffect } from "react";
import WordFrequencyChart from "../components/WordFrequencyChart";

export default function Visualizations() {
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.palestinewatch.me/api/news");
        const data = await response.json();
        const descriptionList = data.map((item) => item.description);
        console.log("Fetched descriptions:", descriptionList); // Debugging
        setDescriptions(descriptionList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  
    console.log(descriptions);
    return (
      <div>
        <Head>
          <title>Visualizations rahhhhh</title>
          <meta name="description" content="Visualizations" />
          <link rel="icon" href="/watermelon.ico" />
        </Head>
        <h1 className="text-center mt-4 mb-4">Visualizations</h1>
        <div>
          <h1>Most Commonly Referenced Words in News Descriptions</h1>
          <WordFrequencyChart descriptions={descriptions} />
        </div>
      </div>
      

    );
}
