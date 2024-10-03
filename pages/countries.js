import { useEffect, useState } from 'react';
import Head from "next/head";
import styles from "../styles/ModelPage.module.css";
import CountryCard from '../components/CountryCard';
import axios from 'axios';

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [countryDetails, setCountryDetails] = useState({});

  useEffect(() => {
    const opts = {
      'page': 1,
      'yearFrom': 2014,
      'yearTo': 2023,
      'coa': "JOR,LBN,SYR",
      'cf_type': 'ISO'
    };

    const baseUrl = 'https://api.unhcr.org/population/v1/unrwa/';
    const queryString = new URLSearchParams(opts).toString();
    const apiUrl = `${baseUrl}?${queryString}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response error ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        const uniqueCountries = [];
        const countrySet = new Set();
        let idCounter = 1;

        data['items'].forEach(country => {
          if (!countrySet.has(country.coa_iso)) {
            countrySet.add(country.coa_iso);
            uniqueCountries.push({
              ...country,
              id: idCounter
            });
            idCounter += 1
          }
        });
        setCountries(uniqueCountries);
        fetchCountryDetails(uniqueCountries);
      })
      .catch(error => {
        console.error('Problem with fetch: ', error);
      });
  }, []);

  const fetchCountryDetails = async (countries) => {
    const details = {};

    for (const country of countries) {
      const coaIso = country.coa_iso;

      try {
        const res = await axios.get(`https://restcountries.com/v3.1/alpha/${coaIso}`);
        const countryData = res.data[0];

        details[coaIso] = {
          flag: countryData.flags.png,
          capital: countryData.capital ? countryData.capital[0] : 'Unknown',
          population: countryData.population.toLocaleString(),
          region: countryData.region,
          subregion: countryData.subregion,
        };
      } catch (error) {
        console.error(`Problem with country - ${coaIso}:`, error);
      }
    }

    setCountryDetails(details);
  };

  return (
    <div>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainContent}>
        <h1>Countries</h1>
        <br></br>

        <p>&emsp;Some general supporters of Palestine include, but are not limited to:</p>
        <ul>
          <li>Argentina</li>
          <li>Brazil</li>
          <li>China</li>
          <li>India</li>
          <li>Indonesia</li>
          <li>Russia</li>
          <li>Saudi Arabia</li>
          <li>South Africa</li>
          <li>Spain</li>
          <li>Turkey</li>
        </ul>

        <br></br>
        <p>&emsp;Countries of asylum that have taken refugees in the conflict include, but are not limited to:</p>
        <div>
          {
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {countries.map((country, index) => {
                const coaIso = country.coa_iso;
                const details = countryDetails[coaIso] || {};
                const id = country.id;

                return (
                  <CountryCard
                    id={id}
                    country={country.coa_name}
                    flag={details.flag}
                    capital={details.capital}
                    population={details.population}
                    region={details.region}
                    subregion={details.subregion}
                  />
                );
              })}
            </div>
          }
        </div>
      </main>
    </div>
  );
}
