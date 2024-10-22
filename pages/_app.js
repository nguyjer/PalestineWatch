import NavBar from "../components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Dynamically load Bootstrap JS on client-side only
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
