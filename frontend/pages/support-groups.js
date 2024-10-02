import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import SupportCard from "../components/SupportGroupCard";

export default function SupportGroups() {
  const [supportGroups, setSupportGroups] = useState([]);

  useEffect(() => {
    fetchGroups();
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
        <h1>Support Groups Page</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {supportGroups.slice(0, 24).map((group, index) => (
            <SupportCard
              key={group.id}
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
