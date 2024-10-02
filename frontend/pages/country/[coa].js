import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from "next/head";
import styles from "../../styles/ModelPage.module.css";
import CountryDetails from '../../components/CountryDetails';

export default function CountryPage() {
  const router = useRouter();
  const { coa } = router.query;
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    if (!coa) return;

    const opts = {
      'page': 1,
      'yearFrom': 2014,
      'yearTo': 2023,
      'coa': coa,
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
        setCountryData(data['items']);
      })
      .catch(error => {
        console.error('Problem with fetch: ', error);
      });
  }, [coa]);

  return (
    <div>
      <Head>
        <title>{coa} Details</title>
      </Head>
      <main className={styles.mainContent}>
        <h1>Details for {coa}</h1>

        <CountryDetails countryData={countryData} />
      </main>
    </div>
  );
}
