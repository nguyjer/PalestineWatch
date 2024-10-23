import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import NewsCard from "../../components/NewsCard.js";


export default async function SupportGroupPage() {
  const router = useRouter();
  const { id } = router.query;

  const groupDetails = groupData[id];

  if (!groupDetails) {
    return <p>Loading...</p>;
  }

  const [news, setNews] = useState([]);
  const [supportGroups, setSupportGroups] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/news/${id}`
        );
        const articles = response.data;
        setNews(articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    const fetchSupportGroups = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/support-groups/${id}`
        );
        const groups = response.data;
        setSupportGroups(groups);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchSupportGroups();
    fetchNews();
  }, []);

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
          <NewsCard {...news} />
        </div>
      </main>
    </div>
  );
}
