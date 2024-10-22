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
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <main className="flex-grow-1">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
