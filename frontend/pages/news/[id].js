// pages/articles/[id].js
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import ExploreCard from "../../components/ExploreCard.js";
import SupportCard from "../../components/SupportGroupCard.js";
import SupportGroups from "../support-groups.js";

function ArticlePage() {
  const router = useRouter();
  const { id } = router.query; // Retrieve the dynamic article ID from the URL
  const [article, setArticle] = useState(null);
  const randomSupport = Math.floor(Math.random() * 3) + 1;
  const randomCountry = Math.floor(Math.random() * 3) + 1;
  const [supportGroups, setSupportGroups] = useState({});

  useEffect(() => {
    if (!id) return;

    // Fetch the article details using the article ID
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/news/${id}`
        ); // Fetch the article details
        const data = await response.data;
        console.log(data);
        setArticle(data || {});
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    const fetchSupportGroups = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/support-groups/${id}`
        );
        const groups = await response.data;
        setSupportGroups(groups || {});
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchSupportGroups();
    fetchArticle();
  }, [id]);

  function removeBracketedText(str) {
    // Use a regular expression to find and remove any trailing bracketed text, e.g., "(...)" or "[...]"
    return str.replace(/\s?[\[\(][^\[\]\(\)]+[\]\)]$/, "");
  }

  if (!article) return <p>Loading...</p>;
  if (!SupportGroups) return <p>Loading...</p>;

  return (
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
        <ExploreCard link={`/countries/${randomCountry}`} type="Country" />
        <SupportCard {...supportGroups} />
      </div>
    </main>
  );
}

export default ArticlePage;
