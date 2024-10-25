import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import CountryDetails from "../../components/CountryDetails.js";
import axios from "axios";
import idToCoaMap from "../../components/idToCoaMap.js";
import NewsCard from "../../components/NewsCard.js";
import SupportCard from "../../components/SupportGroupCard.js";

export default function CountryPage() {
  const router = useRouter();
  const { id } = router.query;
  const [country, setCountry] = useState({});
  const [countryDetails, setCountryDetails] = useState({});
  const [news, setNews] = useState({}); // Keep as an object for a single article
  const coa = idToCoaMap[id];
  const [supportGroup, setSupportGroup] = useState({}); // Keep as an object

  useEffect(() => {
    if (!coa) return;

    const opts = {
      page: 1,
      yearFrom: 2014,
      yearTo: 2023,
      coa: coa,
      cf_type: "ISO",
    };

    // const baseUrl = "https://api.unhcr.org/population/v1/unrwa/";
    // const queryString = new URLSearchParams(opts).toString();
    const apiUrl = `http://api.palestinewatch.me/api/countries`;

    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          `https://api.palestinewatch.me/api/countries/${id}`
        );
        const data = await response.data; // Access the data directly

        setCountry(data); // Set the unique countries data to state
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `http://api.palestinewatch.me/api/news/${id}`
        );
        const articles = await response.data;

        setNews(articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    const fetchSupportGroup = async () => {
      try {
        const response = await axios.get(
          `http://api.palestinewatch.me/api/support-groups/${id}`
        );
        const group = await response.data;

        // Assuming group is an object for a single support group
        setSupportGroup(group);
      } catch (error) {
        console.error("Error fetching support group:", error);
      }
    };
    const fetchCountryDetails = async () => {
      const details = {};
      try {
        details["commonName"] = country.common_name;
        details["officialName"] = country.official_name;
        details["unMember"] = country.unMembership ? "Yes" : "No";
        details["flag"] = country.flag_url;
        details["maps"] = country.maps || "Unknown";
        details["capital"] = country.capital ? country.capital[0] : "Unknown";
        details["population"] = country.population.toLocaleString();
        details["region"] = country.region;
        details["subregion"] = country.subregion;
      } catch (error) {
        console.error(`Problem with country - ${coa}:`, error);
      }

      setCountryDetails(details);
    };

    fetchCountries();
    fetchCountryDetails();
    fetchSupportGroup();
    fetchNews();
  }, [coa]);


  return (
    <div>
      <Head>
        <title>{coa} Details</title>
        <link rel="icon" href="/watermelon.ico" />
      </Head>
      <main>
        <CountryDetails
          countryData={countryData}
          countryDetails={countryDetails}
        />
        <div>
          <h2>Explore More</h2>
          {/* Conditional rendering for NewsCard and SupportCard */}
          {news && Object.keys(news).length > 0 ? (
            <NewsCard {...news} />
          ) : (
            <p>No news available</p>
          )}

          {supportGroup && Object.keys(supportGroup).length > 0 ? (
            <SupportCard {...supportGroup} />
          ) : (
            <p>No support group available</p>
          )}
        </div>
      </main>
    </div>
  );
}
