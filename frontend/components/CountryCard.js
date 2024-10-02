import Link from 'next/link';

export default function CountryCard({ country, isoCode, flag, capital, population, region }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', borderRadius: '8px', width: '250px' }}>
      {flag && <img src={flag} alt={`${country} flag`} style={{ width: '100px' }} />}
      <h2>{country}</h2>
      <p>Capital: {capital || 'Loading...'}</p>
      <p>Population: {population || 'Loading...'}</p>
      <p>Region: {region || 'Loading...'}</p>

      <Link href={`/country/${isoCode}`}>
        <u>View Details</u>
      </Link>
    </div>
  );
}
