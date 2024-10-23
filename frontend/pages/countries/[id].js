import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import CountryDetails from "../../components/CountryDetails.js";
import axios from "axios";
import idToCoaMap from "../../components/idToCoaMap.js";
import ExploreCard from "../../components/ExploreCard.js";
import NewsCard from "../../components/NewsCard.js";

export default function CountryPage() {
  const router = useRouter();
  const { id } = router.query;
  const [countryData, setCountryData] = useState([]);
  const [countryDetails, setCountryDetails] = useState({});
  const [news, setNews] = useState([]);
  const coa = idToCoaMap[id];

  useEffect(() => {
    if (!coa) return;

    const opts = {
      page: 1,
      yearFrom: 2014,
      yearTo: 2023,
      coa: coa,
      cf_type: "ISO",
    };

    const baseUrl = "https://api.unhcr.org/population/v1/unrwa/";
    const queryString = new URLSearchParams(opts).toString();
    const apiUrl = `${baseUrl}?${queryString}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response error " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setCountryData(data["items"]);
        fetchCountryDetails();
      })
      .catch((error) => {
        console.error("Problem with fetch: ", error);
      });

    async function fetchNews() {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/news");
        const articles = response.data;
        setNews(articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    fetchNews();
  }, [coa]);

  const fetchCountryDetails = async () => {
    const details = {};

    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/alpha/${coa}`
      );
      const countryData = res.data[0];

      details["commonName"] = countryData.name.common;
      details["officialName"] = countryData.name.official;
      details["unMember"] = countryData.unMember ? "Yes" : "No";
      details["flag"] = countryData.flags.png;
      details["maps"] = countryData.maps.googleMaps;
      details["capital"] = countryData.capital
        ? countryData.capital[0]
        : "Unknown";
      details["population"] = countryData.population.toLocaleString();
      details["region"] = countryData.region;
      details["subregion"] = countryData.subregion;
    } catch (error) {
      console.error(`Problem with country - ${coa}:`, error);
    }

    setCountryDetails(details);
  };

  const randomArticle1 = Math.floor(Math.random() * len(news)) + 1;
  const randomArticle2 = Math.floor(Math.random() * 3) + 1;

  return (
    <div>
      <Head>
        <title>{coa} Details</title>
      </Head>
      <main>
        <h1>Details for {coa}</h1>

        <CountryDetails
          countryData={countryData}
          countryDetails={countryDetails}
        />
        <div>
          <h2>Explore More</h2>
          <NewsCard {...news[randomArticle1]} />
          <ExploreCard
            link={`/support-groups/${randomArticle2}`}
            type="Support Group"
          />
        </div>
      </main>
    </div>
  );
}
