const Map = ({ placeName, zoom = 5 }) => {
  if (!placeName) {
    return <p>No location provided</p>; // Fallback UI
  }

  // Construct the embed URL using the place name
  const embedLink = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDKqMqJ0Lwgog273I7j4YBWm8lSkPJabwo&q=${encodeURIComponent(
    placeName
  )}&zoom=${zoom}`;

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <iframe
        src={embedLink}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
