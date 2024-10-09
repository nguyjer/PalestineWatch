import NavBar from "../components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/global.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Dynamically load Bootstrap JS on client-side only
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
