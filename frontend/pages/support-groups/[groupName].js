import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

const groupData = {
  "Adalah-NY: Campaign for the Boycott of Israel": {
    id: 1,
    email: "info@adalahny.org",
    city: "New York City",
    state: "NY",
    zipCode: "10603",
    link: "https://adalahny.org/",
  },
  "Al-Awda PRRC": {
    id: 2,
    email: "amanibarakat@gmail.com",
    city: "Coral Springs",
    state: "FL",
    zipCode: "33075",
    link: "https://al-awdapalestine.org/",
  },
  "Chico Palestine Action Group": {
    id: 3,
    email: "chicopalestineaction@gmail.com",
    city: "Chico",
    state: "CA",
    zipCode: "95928",
    link: "http://www.chicopeace.org/cpag",
  },
};

export default function SupportGroupPage() {
  const router = useRouter();
  const { groupName } = router.query;

  const groupDetails = groupData[groupName];

  if (!groupDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Head>
        <title>{groupName} Details</title>
      </Head>
      <main className={styles.mainContent}>
        <h1>Details for {groupName}</h1>
        <p>Email: {groupDetails.email}</p>
        <p>City: {groupDetails.city}</p>
        <p>State: {groupDetails.state}</p>
        <p>Zip Code: {groupDetails.zipCode}</p>
        <Link href={groupDetails.link}>
          <p>Link to Website</p>
        </Link>
      </main>
    </div>
  );
}
