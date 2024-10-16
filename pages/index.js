// pages/index.js
import Head from "next/head";
import CarouselComponent from "../components/CarouselComponent"; // Import Carousel component

export default function App() {
  return (
    <div>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background Image Section */}
      <div
        className="container-fluid"
        style={{
          backgroundImage: "url('/palestineflag.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative", // Ensure the arrow is positioned relative to the container
        }}
      >
        <div
          className="row justify-content-center align-items-center text-center"
          style={{ height: "100%" }}
        >
          <div className="col-md-8">
            <h1 className="display-4 text-white">Palestine Watch</h1>
            <h2 className="lead text-white">Palestine-Israel Conflict History</h2>
          </div>
        </div>

        {/* Down Arrow */}
        <div
          className="text-center"
          style={{
            position: "absolute",
            bottom: "20px", // Adjusts the position from the bottom
            left: "50%", // Centers it horizontally
            transform: "translateX(-50%)", // Fine-tunes centering
          }}
        >
          <span className="text-white" style={{ fontSize: "2rem" }}>
            ↓
          </span>
          <p className="text-white" style={{ fontSize: "1rem" }}>
            Scroll for more info
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main>
        {/* Carousel Component */}
        {/* <div className={styles.carousel}>
          <CarouselComponent />
        </div> */}

        {/* Our Mission Section */}
        <div className="container my-5">
          <div className="row">
            {/* Text Column */}
            <div className="col-md-6">
              <h2 className="mb-4">Our Objective</h2>
              <p>
                A political website for all who believe that freedom for the
                Palestinian people is an integral part of achieving collective
                liberation. We provide resources and information to help you
                learn more about the oppression faced by Palestine.
              </p>
              <p>
                Our goal is to bring attention to the history and ongoing
                struggles of Palestinians and to provide ways for people to get
                involved in the movement for justice and human rights in the
                region.
              </p>
            </div>

            {/* Image Column */}
            <div className="col-md-6">
              {/* add carousel here*/}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
