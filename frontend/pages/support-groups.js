import Head from "next/head";
import styles from "../styles/ModelPage.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import SupportCard from "../components/SupportGroupCard";

export default function SupportGroups() {
  const [supportGroups, setSupportGroups] = useState([]);

  useEffect(() => {
    //hard code three groups
    setSupportGroups([
      {
        id: 1,
        name: "Adalah-NY: Campaign for the Boycott of Israel",
        email: "info@adalahny.org",
        city: "New York City",
        state: "NY",
        zipCode: "10603",
        link: "https://adalahny.org/",
      },
      {
        id: 2,
        name: "Al-Awda PRRC",
        email: "amanibarakat@gmail.com",
        city: "Coral Springs",
        state: "FL",
        zipCode: "33075",
        link: "https://al-awdapalestine.org/",
      },
      {
        id: 3,
        name: "Chicago Faith Coalition on Middle East Policy",
        email: "",
        city: "Chicago",
        state: "IL",
        zipCode: "60605",
        link: "	http://www.chicagofaithcoalition.org/",
      },
    ]);
    // fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      console.log("Fetching groups from API");
      const response = await axios.get("/api/groups");
      console.log("Groups fetched: ", response.data);
      setSupportGroups(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainContent}>
        <h1>Support Groups in the U.S.</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {supportGroups.map((group, index) => (
            <SupportCard
              key={group.id}
              id={group.id}
              groupName={group.name}
              groupEmail={group.email}
              groupCity={group.city}
              groupState={group.state}
              groupZipCode={group.zipCode}
              groupLink={group.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
