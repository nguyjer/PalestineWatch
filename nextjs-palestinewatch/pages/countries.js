// pages/about.js
import { useEffect, useState } from 'react';
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function About() {
  // State to hold the fetched data
  const [supportGroups, setSupportGroups] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    const apiUrl = 'https://api.unhcr.org/population/v1/unrwa/?limit=100&yearFrom=2000&yearTo=2023'; // Replace with your actual API URL

    const opts = {
      'page': 1,
      'limit': 10,            // Adjust the limit as needed
      'yearFrom': 2014,       // Fetch data starting from the year 2014
      'yearTo': 2023,         // Fetch data up to the year 2023
      'cooAll': true,         // Include all countries of origin
      'coaAll': true,         // Include all countries of asylum
      'download': false       // Return data as JSON, not CSV
    };

    // Fetch data from the API
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();  // Parse the JSON data
      })
      .then(data => {
        console.log(data);
        setSupportGroups(data['items'])
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);  // Empty array means the effect will only run once when the component mounts

  return (
    <div>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainContent}>
        <h1>Support Groups Page</h1>
        <p>This is the Support Groups page for Palestine Watch.</p>

        {/* Render the fetched data */}
        <div>
          {supportGroups.length === 0 ? (
            <p>Loading support groups...</p>
          ) : (
            <ul>
              {supportGroups.map((group, index) => (
                <li key={index}>
                  {/* Customize this according to your API data structure */}
                  {/* <strong>{group.name}</strong>: {group.description} */}
                  Year: {group.year}, Total: {group.total}

                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}
