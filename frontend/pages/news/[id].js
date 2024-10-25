// pages/articles/[id].js
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SupportCard from "../../components/SupportGroupCard.js";
import SupportGroups from "../support-groups.js";
import CountryCard from "../../components/CountryCard.js";

function ArticlePage() {
  const router = useRouter();
  const { id } = router.query; // Retrieve the dynamic article ID from the URL
  const [article, setArticle] = useState(null);
  const [country, setCountry] = useState(null);
  const randomSupport = Math.floor(Math.random() * 3) + 1;
  const randomCountry = Math.floor(Math.random() * 3) + 1;
  const [supportGroups, setSupportGroups] = useState({});

  useEffect(() => {
    if (!id) return;

    // Fetch the article details using the article ID
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `https://api.palestinewatch.me/api/news/${id}`
        ); // Fetch the article details
        const data = await response.data;
        console.log(data);
        setArticle(data || {});
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    const fetchCountry = async () => {
      try {
        const response = await axios.get(
          `http://api.palestinewatch.me/api/countries/${id}`
        ); // Fetch the article details
        const data = await response.data;
        console.log(data);
        setCountry(data[id] || {});
      } catch (error) {
        console.error("Error fetching country:", error);
      }
    };

    const fetchSupportGroups = async () => {
      try {
        const response = await axios.get(
          `https://api.palestinewatch.me/api/support-group/${article.supportGroupId}`
        );
        const group = await response.data;
        setSupportGroups(group || {});
      } catch (error) {
        console.error("Error fetching group:", error);
      }
    };
    fetchSupportGroups();
    fetchArticle();
    fetchCountry();
  }, [id]);

  function removeBracketedText(str) {
    // Use a regular expression to find and remove any trailing bracketed text, e.g., "(...)" or "[...]"
    return str.replace(/\s?[\[\(][^\[\]\(\)]+[\]\)]$/, "");
  }

  if (!article) return <p>Loading...</p>;
  if (!country) return <p>Loading...</p>;
  if (!SupportGroups) return <p>Loading...</p>;


  return (
    <div>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/watermelon.ico" />
      </Head>
      <main>
        <div>
          <h1>{article.title}</h1>
        </div>
        <div>
          <div>
            <img src={article.url_image} alt="Article Image" />{" "}
          </div>
          <p>
            {removeBracketedText(article.content)}
            <a href={article.url}>Read More</a>
          </p>
          <p>Source: {article.source}</p>
          <p>Published on: {article.publish_date}</p>
        </div>
        <div>
          <h2>Explore More</h2>
          {article && Object.keys(article).length > 0 ? (
            <NewsCard {...article} />
          ) : (
            <p>No news available</p>
          )}
          {country && Object.keys(country).length > 0 ? (
            <CountryCard {...country} />
          ) : (
            <p>No country available</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default ArticlePage;
