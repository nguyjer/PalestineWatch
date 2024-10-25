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
    <div className="card h-100 d-flex flex-column">
      {/* Country name at the top */}
      <div className="card-header text-center">
        <h4>{id}</h4>
      </div>

      <div className="d-flex justify-content-center">
        {flag && (
          <img
            src={flag}
            className="card-img-top pt-3"
            alt={`${country} flag`}
            style={{ height: "100px", width: "auto", maxWidth: "100%" }} // Adjusting the width to keep aspect ratio
          />
        )}
      </div>

      <div className="card-body d-flex flex-column flex-grow-1">
        <div className="mb-2">
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
        <div className="mt-auto">
          <Link
            href={`/countries/${id}`}
            className="btn btn-primary mt-2 align-self-start"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
