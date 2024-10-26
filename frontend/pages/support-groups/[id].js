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
  const [supportGroups, setSupportGroups] = useState(null); // Initialize as array
  const [country, setCountry] = useState(null);

  function truncateString(str, num) {
    return str?.length > num ? str.slice(0, num) + "..." : str;
  }

  useEffect(() => {
    if (!id) return; // Ensure id is available before fetching

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
  }, [id]); // Add id as a dependency to trigger the effect when it changes

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(
          `https://api.palestinewatch.me/api/countries/${supportGroups.countryId ? supportGroups.countryId : ""}`
        ); // Fetch the article details
        const data = await response.data;
        console.log(data);
        setCountry(data || {});
      } catch (error) {
        console.error("Error fetching country:", error);
      }
    };

    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://api.palestinewatch.me/api/news/${supportGroups.newsId ? supportGroups.newsId : ""}`
        );
        const article = await response.data;
        setNews(article || {});
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    
    fetchNews();
    fetchCountry();
  }, [supportGroups]); // Refetch whenever `supportGroups` changes

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
        <h1>Details for {supportGroups.name}</h1>
        <img
          src={supportGroups.url_image || "/placeholder-image.jpg"} // Use a placeholder if no image URL
          alt={`${supportGroups.name} image`}
        />
        <p>Email: {supportGroups.email}</p>
        <p>City: {supportGroups.city}</p>
        <p>State: {supportGroups.state}</p>
        <p>Zip Code: {supportGroups.zipcode}</p>
        <p>
          <Link href={supportGroups.link}>
            <u>{supportGroups.link}</u>
          </Link>
        </p>

        <div>
          <h2>Explore More</h2>
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
            <p>No news available</p>
          )}
          {country && Object.keys(country).length > 0 ? (
            <div className="col-lg-4 col-md-6 mb-4">
              <CountryCard
                id={country.id} // Using coa_iso as the ID
                country={country.official_name}
                flag={country.flag_url}
                capital={country.capital}
                population={country.population}
                region={country.region}
                subregion={country.subregion}
              />
            </div>
          ) : (
            <p>No country available</p>
          )}
        </div>
      </main>
    </div>
  );
}
