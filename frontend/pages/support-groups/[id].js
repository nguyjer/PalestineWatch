import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import ExploreCard from '../../components/ExploreCard.js';

const groupData = {
  1: {
    name: "Adalah-NY: Campaign for the Boycott of Israel",
    email: "info@adalahny.org",
    city: "New York City",
    state: "NY",
    zipCode: "10603",
    link: "https://adalahny.org/",
    imageURL:
      "https://images.squarespace-cdn.com/content/v1/6168ba7212c0a730b7d1b341/1634259315744-1AJ2CK53J61TVFCXC59K/Bye-bye+Leviev+December+2017.png?format=1500w",
  },
  2: {
    name: "Al-Awda PRRC",
    email: "amanibarakat@gmail.com",
    city: "Coral Springs",
    state: "FL",
    zipCode: "33075",
    link: "https://al-awdapalestine.org/",
    imageURL:
      "https://al-awdapalestine.org/wp-content/uploads/2017/07/Al-AWDA-LARGE-WEB-LOGO.jpg",
  },
  3: {
    name: "Chicago Faith Coalition on Middle East Policy",
    email: "No Email Available",
    city: "Chicago",
    state: "IL",
    zipCode: "60605",
    link: "http://www.chicagofaithcoalition.org/",
    imageURL:
      "https://www.chicagofaithcoalition.org/images/KidsTearDownSignWall.jpg",
  },
};

export default function SupportGroupPage() {
  const router = useRouter();
  const { id } = router.query;

  const groupDetails = groupData[id];
  const randomArticle1 = Math.floor(Math.random() * 3) + 1;
  const randomArticle2 = Math.floor(Math.random() * 3) + 1;

  if (!groupDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Head>
        <title>{groupDetails.name} Details</title>
      </Head>
      <main>
        <h1>Details for {groupDetails.name}</h1>
        <img
          src={groupDetails.imageURL || "/placeholder-image.jpg"} // Use a placeholder if no image URL
          alt={`${groupDetails.name} image`}
        />
        <p>Email: {groupDetails.email}</p>
        <p>City: {groupDetails.city}</p>
        <p>State: {groupDetails.state}</p>
        <p>Zip Code: {groupDetails.zipCode}</p>
        <p>
          <Link href={groupDetails.link}>
            <u>{groupDetails.link}</u>
          </Link>
        </p>

        <div>
          <h2>Explore More</h2>
          <ExploreCard
            link={`/news/${randomArticle1}`}
            type="News Article"
          />
          <ExploreCard link={`/countries/${randomArticle2}`} type="Country" />
        </div>
      </main>
    </div>
  );
}
