// pages/about.js
import Head from "next/head";
import axios from "axios";
import styles from "../styles/News.module.css";
import NewsCard from "../components/NewsCard";
import { Card } from 'react-bootstrap';
import { React, useState, useEffect } from "react";


export default function About() {
  const [newsCards, setNewsCards] = useState([]);
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const articles = await axios.get('http://127.0.0.1:4000/api/news')

        // Set the articles into the newsCards array state
        setNewsCards(articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  function truncateString (str, num){
    // Check if the string length is greater than the specified number of characters
    if (str.length > num) {
      // Return the truncated string with "..."
      return str.slice(0, num) + "...";
    } else {
      // If the string length is less than or equal to the limit, return the original string
      return str;
  }
  };

  return (
    <div>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.mainContent}>
            <div className={styles.newsCardContainer}>
              {newsCards.map((article) => (
                <li key={article.article_id} style={{ listStyle: 'none', margin: '10px' }}>
                <NewsCard
                  articleId={article.article_id}
                  title={truncateString(article.title, 50)}
                  description={truncateString(article.description, 95)}
                  imageUrl={article.urlToImage}
                  author={article.author}
                  publishedAt={article.publishedAt}
                  source={article.source}
                />
              </li>))}            
            </div>
          </main>
    </div>
  );
}
