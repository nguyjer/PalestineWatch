import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../../components/NewsCard.js";
import CountryCard from "../../components/CountryCard.js";

export default function SupportGroupPage() {
  const router = useRouter();
  const { id } = router.query;
  const [news, setNews] = useState(null);
  const [supportGroups, setSupportGroups] = useState(null);
  const [country, setCountry] = useState(null);

  function truncateString(str, num) {
    return str?.length > num ? str.slice(0, num) + "..." : str;
  }

  useEffect(() => {
    if (!id) return;

    const fetchSupportGroups = async () => {
      try {
        const response = await axios.get(
          `https://api.palestinewatch.me/api/support-groups/${id}`
        );
        const group = await response.data;
        setSupportGroups(group || {});
      } catch (error) {
        console.error("Error fetching support groups:", error);
      }
    };
    fetchSupportGroups();
  }, [id]);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(
          `https://api.palestinewatch.me/api/countries/${
            supportGroups.countryId ? supportGroups.countryId : ""
          }`
        );
        const data = await response.data;
        setCountry(data || {});
      } catch (error) {
        console.error("Error fetching country:", error);
      }
    };

    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://api.palestinewatch.me/api/news/${
            supportGroups.newsId ? supportGroups.newsId : ""
          }`
        );
        const article = await response.data;
        setNews(article || {});
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
    fetchCountry();
  }, [supportGroups]);

  if (!supportGroups) {
    return <p>Loading... groups</p>;
  }

  return (
    <div>
      <Head>
        <title>{supportGroups.name} Details</title>
        <link rel="icon" href="/watermelon.ico" />
      </Head>
      <main>
        <h1 className="text-center mt-5 mb-4">Details for {supportGroups.name}</h1>
        <div className="text-center mb-4">
          <img
            src={
              supportGroups.url_image == "No Image Found" ||
              !supportGroups.url_image.startsWith("http")
                ? "/Designer.png"
                : supportGroups.url_image
            }
            alt={`${supportGroups.name} image`}
            style={{ maxWidth: "200px", height: "auto" }}
          />
        </div>
        <p className="text-center">Email: {supportGroups.email}</p>
        <p className="text-center">City: {supportGroups.city}</p>
        <p className="text-center">State: {supportGroups.state}</p>
        <p className="text-center">Zip Code: {supportGroups.zipcode}</p>
        <p className="text-center">
          {supportGroups.link ? (
            <Link
              href={
                supportGroups.link.startsWith("http://") ||
                supportGroups.link.startsWith("https://")
                  ? supportGroups.link
                  : `https://${supportGroups.link}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>Link to Website</u>
              <p></p>
            </Link>
          ) : (
            <p>No website available</p>
          )}
        </p>

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

            {country && Object.keys(country).length > 0 ? (
              <div className="col-lg-4 col-md-6 mb-4">
                <CountryCard
                  id={country.id}
                  country={country.official_name}
                  flag={country.flag_url}
                  capital={country.capital}
                  population={country.population}
                  region={country.region}
                  subregion={country.subregion}
                />
              </div>
            ) : (
              <p className="text-center">No country available</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
