import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import NewsCard from "../../components/NewsCard.js";
import SupportCard from "../../components/SupportGroupCard.js";
import Map from "../../components/map.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CountryPage() {
  const router = useRouter();
  const { id } = router.query;
  const [country, setCountry] = useState({});
  const [countryDetails, setCountryDetails] = useState({});
  const [news, setNews] = useState({});

  const [supportGroup, setSupportGroup] = useState({});
  
  function truncateString(str, num) {
    return str?.length > num ? str.slice(0, num) + "..." : str;
  }

  useEffect(() => {
    const apiUrl = `https://api.palestinewatch.me/api/countries`;

    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          `https://api.palestinewatch.me/api/countries/${id}`
        );
        const data = await response.data;

        setCountry(data); 
        setCountryDetails(data);
        
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, [id]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://api.palestinewatch.me/api/news/${country.newsId}`
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
          `https://api.palestinewatch.me/api/support-groups/${country.supportGroupId}`
        );
        const group = await response.data;

        setSupportGroup(group);
      } catch (error) {
        console.error("Error fetching support group:", error);
      }
    };

    fetchSupportGroup();
    fetchNews();
  }, [country]);

  return (
    <div>
      <Head>
        <title>{country.official_name} Details</title>
        <link rel="icon" href="/watermelon.ico" />
      </Head>
      <main>
        <div className="container mt-5">
          <h1 className="text-center mb-4">Country Details</h1>
          <p className="text-center mb-4">
            Here you can find important information about the country, including
            its history, demographics, and geographical location.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <h3>Official Name: {country.official_name}</h3>
              {country.flag_url && (
                <img
                  src={country.flag_url}
                  className="img-fluid"
                  alt={`${country.official_name} flag`}
                  style={{
                    height: "300px",
                    width: "auto",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }} // Adjusting the width to keep aspect ratio
                />
              )}
              <h3>Common Name: {country.common_name}</h3>
              <h5>Member of the UN: {country.unMembership}</h5>
              <br />
              <p>Capital: {country.capital}</p>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Subregion: {country.subregion}</p>
              <Map placeName={country.official_name} />
              
            </div>
          </div>
        </div>

        {/* Explore More section */}
        <div className="container mt-5">
          <h2 className="text-center mb-4">Explore More</h2>
          <div className="row justify-content-center">
            {news && Object.keys(news).length > 0 ? (
              <div className="col-lg-4 col-md-6 mb-4">
                <NewsCard
                  articleId={news.id}
                  title={truncateString(news.title, 50)}
                  description={truncateString(news.description, 95)}
                  imageUrl={news.url_image}
                  author={news.author}
                  publishedAt={news.publish_date}
                  source={news.source}
                />
              </div>
            ) : (
              <p className="text-center">No news available</p>
            )}

            {supportGroup && Object.keys(supportGroup).length > 0 ? (
              <div className="col-lg-4 col-md-6 mb-4">
                <SupportCard
                  id={supportGroup.id}
                  groupName={truncateString(supportGroup.name, 50)}
                  groupEmail={supportGroup.email}
                  groupCity={supportGroup.city}
                  groupState={supportGroup.state}
                  groupZipCode={supportGroup.zipcode}
                  groupLink={supportGroup.link}
                  groupImageURL={supportGroup.url_image}
                />
              </div>
            ) : (
              <p className="text-center">No support group available</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
