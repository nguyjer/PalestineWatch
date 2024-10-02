import Link from 'next/link';
import styles from "../styles/CountryCard.module.css";

export default function CountryCard({ country, isoCode, flag, capital, population, region, subregion }) {
  return (
    <div className={styles.countryCard}>
      {flag && <img src={flag} alt={`${country} flag`} style={{ width: '100px' }} />}
      <h2>{country}</h2>
      <p>Capital: {capital || 'Loading...'}</p>
      <p>Population: {population || 'Loading...'}</p>
      <p>Region: {region || 'Loading...'}</p>
      <p>Subregion: {subregion || 'Loading...'}</p>

      <Link href={`/country/${isoCode}`}>
        <u>View Details</u>
      </Link>
    </div>
  );
}
