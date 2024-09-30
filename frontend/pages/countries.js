// pages/Countries.js
import { useEffect, useState } from 'react';
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Countries() {
  // State to hold the fetched data
  const [countries, setCountries] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {

    const opts = {
      'page': 1,
      'limit': 10,            // Adjust the limit as needed
      'yearFrom': 2014,       // Fetch data starting from the year 2014
      'yearTo': 2023,         // Fetch data up to the year 2023
      'cooAll': true,         // Include all countries of origin
      'coaAll': true,         // Include all countries of asylum
    };

    const baseUrl = 'https://api.unhcr.org/population/v1/unrwa/';
    const queryString = new URLSearchParams(opts).toString();
    const apiUrl = `${baseUrl}?${queryString}`;

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
        setCountries(data['items'])
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
        <h1>Countries</h1>
        <p>This is the Countries page for Palestine Watch.</p>

        {/* Render the fetched data */}
        <div>
          {countries.length === 0 ? (
            <p>Loading support groups...</p>
          ) : (
            <ul>
              {countries.map((group, index) => (
                <li key={index}>
                  {/* Customize this according to your API data structure */}
                  {/* <strong>{group.name}</strong>: {group.description} */}
                  Year: {group.year}, Total: {group.total}, Country: {group.coo}

                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}