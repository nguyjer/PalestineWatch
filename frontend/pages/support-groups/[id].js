import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../../components/NewsCard.js";

export default function SupportGroupPage() {
  const router = useRouter();
  const { id } = router.query;
  const [news, setNews] = useState({});
  const [supportGroups, setSupportGroups] = useState([]); // Initialize as null for loading

  useEffect(() => {
    if (!id) return; // Ensure id is available before fetching

    const fetchSupportGroups = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/support-groups/${id}`
        );
        setSupportGroups(response.data);
      } catch (error) {
        console.error("Error fetching support groups:", error);
      }
    };

    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/news/${id}`
        );
        const article = response.data;
        setNews(article);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchSupportGroups();
    fetchNews();
  }, [id]); // Add id as a dependency to trigger the effect when it changes

  // Display loading state while data is being fetched
  if (!supportGroups) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Head>
        <title>{supportGroups.name} Details</title>
      </Head>
      <main>
        <h1>Details for {supportGroups.name}</h1>
        <img
          src={supportGroups.imageURL || "/placeholder-image.jpg"} // Use a placeholder if no image URL
          alt={`${supportGroups.name} image`}
        />
        <p>Email: {supportGroups.email}</p>
        <p>City: {supportGroups.city}</p>
        <p>State: {supportGroups.state}</p>
        <p>Zip Code: {supportGroups.zipCode}</p>
        <p>
          <Link href={supportGroups.link}>
            <u>{supportGroups.link}</u>
          </Link>
        </p>

        <div>
          <h2>Explore More</h2>
          {news && Object.keys(news).length > 0 ? (
            <NewsCard {...news} />
          ) : (
            <p>No news available</p>
          )}
        </div>
      </main>
    </div>
  );
}
