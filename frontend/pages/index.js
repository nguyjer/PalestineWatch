// pages/index.js
import Head from "next/head";
import CarouselComponent from "../components/CarouselComponent"; // Import Carousel component

export default function App() {
  return (
    <div>
      <Head>
        <title>Palestine Watch</title>
        <link rel="icon" href="/watermelon.ico" />
      </Head>

      {/* Background Image Section */}
      <div
        className="container-fluid"
        style={{
          backgroundImage: "url('/palestineflag.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "95vh", // Adjusted height
          position: "relative",
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
            bottom: "20px", 
            left: "50%",
            transform: "translateX(-50%)",
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
      <main
        style={{
          backgroundColor: "#f8f9fa", // Softer white (light gray) background
          height: "90vh", // Set height to match the background image section
        }}
      >
        {/* Our Mission Section */}
        <div className="container my-5" style={{ paddingTop: "50px" }}> {/* Added padding to move section down */}
          <div className="row align-items-center" style={{ height: "100%" }}>
            {/* Text Column */}
            <div className="col-md-6" style={{ fontSize: "1.25rem" }}> {/* Increased font size */}
              <h2 className="mb-4">Our Objective</h2>
              <p>
                Palestine Watch is committed to providing a platform for all those
                who believe that the liberation of Palestine is a crucial part of
                global justice. The conflict between Israel and Palestine is long-standing,
                and our aim is to educate, inform, and inspire people to take action.
              </p>
              <p>
                We offer resources and information on the ongoing conflict, human rights violations, 
                and international response. By raising awareness, we hope to engage individuals in 
                meaningful discussions and actions that contribute to a just and peaceful future for
                Palestine. 
              </p>
              <p>
                Together, we can challenge the status quo and stand in solidarity with the Palestinian
                people, advocating for their rights, freedom, and the dignity they deserve.
              </p>
              <p>
                The future depends on our collective efforts to push for diplomatic resolutions, 
                economic sanctions, and awareness campaigns that can turn the tide of oppression 
                into one of liberty and justice.
              </p>
            </div>

            {/* Carousel Column */}
            <div className="col-md-6">
              <CarouselComponent /> {/* Carousel added */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
