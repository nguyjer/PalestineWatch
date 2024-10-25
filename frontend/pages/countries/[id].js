import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import idToCoaMap from "../../components/idToCoaMap.js";
import NewsCard from "../../components/NewsCard.js";
import SupportCard from "../../components/SupportGroupCard.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CountryPage() {
  const router = useRouter();
  const { id } = router.query;
  const [country, setCountry] = useState({});
  const [countryDetails, setCountryDetails] = useState({});
  const [news, setNews] = useState({});
  const coa = idToCoaMap[id];
  const [supportGroup, setSupportGroup] = useState({});

  useEffect(() => {
    if (!coa) return;

    const opts = {
      page: 1,
      yearFrom: 2014,
      yearTo: 2023,
      coa: coa,
      cf_type: "ISO",
    };

    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          `https://api.palestinewatch.me/api/countries/${id}`
        );
        const data = await response.data;

        setCountry(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `http://api.palestinewatch.me/api/news/${country.newsId}`
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
          `http://api.palestinewatch.me/api/support-groups/${country.supportGroupId}`
        );
        const group = await response.data;

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
        {/* Moved CountryDetails JSX here */}
        <div className="container mt-5">
          <h1 className="text-center mb-4">Country Details</h1>
          <p className="text-center mb-4">
            Here you can find important information about the country, including its
            history, demographics, and geographical location.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              {countryDetails["flag"] && (
                <img
                  src={countryDetails["flag"]}
                  alt={`flag picture`}
                  style={{ width: "100px" }}
                  className="mb-3"
                />
              )}
              <h3>Official Name: {countryDetails["officialName"]}</h3>
              <h3>Common Name: {countryDetails["commonName"]}</h3>
              <h5>Member of the UN: {countryDetails["unMember"]}</h5>
              <br />
              <p>Capital: {countryDetails["capital"]}</p>
              <p>Population: {countryDetails["population"]}</p>
              <p>Region: {countryDetails["region"]}</p>
              <p>Subregion: {countryDetails["subregion"]}</p>

              <div>
                <h4>Google Maps:</h4>
                <a
                  href={countryDetails["maps"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>View on Google Maps</u>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="text-center">Refugee Statistics</h4>
              <ul className="list-group">
                {/* Add actual country data or remove this block if not needed */}
                {/* {countryData.map((entry, index) => (
                  <li key={index} className="list-group-item">
                    Year: {entry.year}, Total Refugees:{" "}
                    {entry.total.toLocaleString()}
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
        </div>

        {/* Rest of the content */}
        <div>
          <h2>Explore More</h2>
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
