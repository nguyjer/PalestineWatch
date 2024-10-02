export default function CountryDetails({ countryData }) {
  if (countryData.length === 0) {
    return <p>Loading data...</p>;
  }

  return (
    <ul>
      {countryData.map((entry, index) => (
        <li key={index}>
          Year: {entry.year}, Total Refugees: {entry.total.toLocaleString()}
        </li>
      ))}
    </ul>
  );
}