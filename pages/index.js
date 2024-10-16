// pages/index.js
import Head from "next/head";
import styles from "../styles/Home.module.css";
import CarouselComponent from "../components/CarouselComponent"; // Import Carousel component

export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className={styles.overlay}></div> {/* Overlay */}
      <main className={styles.mainContent}>
        <div className={styles.topContent}>
          <h1 className={styles.title}>Palestine Watch</h1>

          <p className={styles.description}>
            Website by Kenny Nguyen, Jeremy Nguyen, William Matherne, Rohan
            Damani, Aryan Samal
          </p>
          <h2 className={styles.conflictTitle}>
            Palestine-Israel Conflict History
          </h2>
        </div>

        {/* Carousel Component */}
        <div className={styles.carousel}>
          <CarouselComponent />
        </div>
      </main>

      <div className={styles.infoSection}>
        <h1>Info:</h1>
        <p style={{ fontSize: "18px", color: "black" }}>
          <strong>
            A political website for all who believe that freedom for the
            Palestinian people <br />
            is an integral part of achieving collective liberation. We provide
            resources and information to help you learn more about the
            oppression faced by Palestine.
          </strong>
        </p>
      </div>
    </div>
  );
}
