import styles from "../styles/CountryDetails.module.css";

export default function CountryDetails({ countryData, countryDetails }) {
  if (countryData.length === 0) {
    return <p>Loading data...</p>;
  }

  return (
    <div className={styles.countryDetails}>
      {countryDetails['flag'] && <img src={countryDetails['flag']} alt={`flag picture`} style={{ width: '100px' }} />}
      <h3>Official Name: {countryDetails['officialName']}</h3>
      <h3>Common Name: {countryDetails['commonName']}</h3>
      <h5>Member of the UN: {countryDetails['unMember']}</h5>
      <br></br>
      
      <p>Capital: {countryDetails['capital']}</p>
      <p>Population: {countryDetails['population']}</p>
      <p>Region: {countryDetails['region']}</p>
      <p>Subregion: {countryDetails['subregion']}</p>

      <div className={styles.yearlyStats}>
        <ul>
          {countryData.map((entry, index) => (
            <li key={index}>
              Year: {entry.year}, Total Refugees: {entry.total.toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h4>Google Maps:</h4>
        <a href={countryDetails['maps']} target="_blank" rel="noopener noreferrer">
          <u>View on Google Maps</u>
        </a>
      </div>
    </div>
  );
}