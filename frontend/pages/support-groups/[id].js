import { useRouter } from "next/router";
import styles from "../../styles/ModelPage.module.css";
import Head from "next/head";
import Link from "next/link";

const groupData = {
  1: {
    name: "Adalah-NY: Campaign for the Boycott of Israel",
    email: "info@adalahny.org",
    city: "New York City",
    state: "NY",
    zipCode: "10603",
    link: "https://adalahny.org/",
  },
  2: {
    name: "Al-Awda PRRC",
    email: "amanibarakat@gmail.com",
    city: "Coral Springs",
    state: "FL",
    zipCode: "33075",
    link: "https://al-awdapalestine.org/",
  },
  3: {
    name: "Chicago Faith Coalition on Middle East Policy",
    email: "",
    city: "Chicago",
    state: "IL",
    zipCode: "60605",
    link: "http://www.chicagofaithcoalition.org/",
  },
};

export default function SupportGroupPage() {
  const router = useRouter();
  const { id } = router.query;

  const groupDetails = groupData[id];

  if (!groupDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Head>
        <title>{groupDetails.name} Details</title>
      </Head>
      <main className={styles.mainContent}>
        <h1>Details for {groupDetails.name}</h1>
        <p>Email: {groupDetails.email}</p>
        <p>City: {groupDetails.city}</p>
        <p>State: {groupDetails.state}</p>
        <p>Zip Code: {groupDetails.zipCode}</p>
        <p>
          <Link href={groupDetails.link}>
            <u>{groupDetails.link}</u>
          </Link>
        </p>
      </main>
    </div>
  );
}
