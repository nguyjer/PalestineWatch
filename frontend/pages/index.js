import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Carousel } from "react-bootstrap";

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
        <div className={styles.carousel}>
          <Carousel fade>
            <Carousel.Item>
              <img
                src="/partition-un.jpg"
                alt="Un partition image"
                style={{ width: "100vh", height: "50vh" }}
              />
              <Carousel.Caption>
                <p className={styles.carouselText}>
                  1947: The United Nations divides Palestine
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/6-day-war.webp"
                alt="6 day war image"
                style={{ width: "100vh", height: "50vh" }}
              />
              <Carousel.Caption>
                <p className={styles.carouselText}>
                  1967: 6-day War against Israel over West Bank and Gaza
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/camp-david.jpg"
                alt="camp david image"
                style={{ width: "100vh", height: "50vh" }}
              />
              <Carousel.Caption>
                <p className={styles.carouselText}>
                  2000: President Clinton hosts Palestinian and Israeli leaders
                  to discuss peace
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/passover-massacre.jpg"
                alt="passover massacre image"
                style={{ width: "100vh", height: "50vh" }}
              />
              <Carousel.Caption>
                <p className={styles.carouselText}>
                  2002: Terrorist attack kills 30 Israelis
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/israel-hamas.jpg"
                alt="2021 Israel-Hamas crisis image"
                style={{ width: "100vh", height: "50vh" }}
              />
              <Carousel.Caption>
                <p className={styles.carouselText}>
                  2021: Hundreds die in Gaza and Israel which sparks a conflict
                  that is still ongoing
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </main>
      <div className={styles.infoSection}>
        <h1>Palestine Causality Toll:</h1>
        <p style={{ fontSize: "30px", color: "black" }}>
          <strong>42,385 Palestinians Killed</strong>
        </p>
        <h1>Info:</h1>
        <p style={{ fontSize: "18px", color: "black" }}>
          <strong>
            A political website for all who belive that freedom for the
            Palestinian people <br></br>
            is an integral part of achieving collective liberation. We provie
            resources and information to help you learn more about the
            oppression faced by Palestine.
          </strong>
        </p>
      </div>
    </div>
  );
}
