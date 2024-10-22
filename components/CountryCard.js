import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function CountryCard({ id, country, flag, capital, population, region, subregion }) {
  return (
    <div className="card mb-3" style={{ maxWidth: '18rem' }}>
      <div className="d-flex justify-content-center">
        {flag && <img src={flag} className="card-img-top pt-3" alt={`${country} flag`} style={{ height: '100px', width: '150px' }} />}
      </div>
      <div className="card-body">
        <h5 className="card-title">{country}</h5>
        <p className="card-text">
          <strong>Capital:</strong> {capital || 'Loading...'} <br />
          <strong>Population:</strong> {population || 'Loading...'} <br />
          <strong>Region:</strong> {region || 'Loading...'} <br />
          <strong>Subregion:</strong> {subregion || 'Loading...'}
        </p>

        <div className="mt-auto">
          <Link href={`/countries/${id}`} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
