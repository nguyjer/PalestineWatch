import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function CountryCard({
  id,
  country,
  flag,
  capital,
  population,
  region,
  subregion,
}) {
  return (
    <div
      className="card h-100 d-flex flex-column justify-content-between text-center"
      style={{ minHeight: "50vh" }} // Set the minimum height for the card
    >
      {/* Country name at the top */}
      <div
        className="card-header d-flex justify-content-center align-items-center"
        style={{ minHeight: "11vh", overflow: "hidden" }} // Flexbox to center the country name
      >
        <h4 className="m-0">{country}</h4>
      </div>

      {/* Center flag image */}
      <div className="d-flex justify-content-center my-3">
        {flag && (
          <img
            src={flag}
            className="img-fluid"
            alt={`${country} flag`}
            style={{ height: "100px", width: "auto", maxWidth: "100%", objectFit: "contain" }} // Adjusting the width to keep aspect ratio
          />
        )}
      </div>

      {/* Card body with centered text */}
      <div className="card-body d-flex flex-column justify-content-center flex-grow-1">
        <div>
          <p className="card-text mb-1">
            <strong>Capital:</strong> {capital || "Loading..."}
          </p>
          <p className="card-text mb-1">
            <strong>Population:</strong> {population || "Loading..."}
          </p>
          <p className="card-text mb-1">
            <strong>Region:</strong> {region || "Loading..."}
          </p>
          <p className="card-text mb-1">
            <strong>Subregion:</strong> {subregion || "Loading..."}
          </p>
        </div>
      </div>

      {/* Centered Read More button */}
      <div className="pb-3">
        <Link href={`/countries/${id}`}
        className="btn btn-light" style={{ width: "80%" }}>
         Read More
        </Link>
      </div>
    </div>
  );
}
