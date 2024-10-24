import "bootstrap/dist/css/bootstrap.min.css";

export default function CountryDetails({ countryData, countryDetails }) {
  if (countryData.length === 0) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Country Details</h1>{" "}
      {/* Centered Title */}
      <p className="text-center mb-4">
        Here you can find important information about the country, including its
        history, demographics, and geographical location.
      </p>
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          {countryDetails["flag"] && (
            <img
              src={countryDetails["flag"]}
              alt={`flag picture`}
              style={{ width: "100px" }}
              className="mb-3"
            />
          )}
          <h3>Official Name: {countryDetails["officialName"]}</h3>
          <h3>Common Name: {countryDetails["commonName"]}</h3>
          <h5>Member of the UN: {countryDetails["unMember"]}</h5>
          <br />
          <p>Capital: {countryDetails["capital"]}</p>
          <p>Population: {countryDetails["population"]}</p>
          <p>Region: {countryDetails["region"]}</p>
          <p>Subregion: {countryDetails["subregion"]}</p>

          <div>
            <h4>Google Maps:</h4>
            <a
              href={countryDetails["maps"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>View on Google Maps</u>
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <h4 className="text-center">Refugee Statistics</h4>
          <ul className="list-group">
            {countryData.map((entry, index) => (
              <li key={index} className="list-group-item">
                Year: {entry.year}, Total Refugees:{" "}
                {entry.total.toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
