import React from 'react';

function GeoLocationButton({ onDetect }) {
  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onDetect(latitude, longitude);
        },
        (error) => {
          alert('Location access denied or error occurred.');
          console.error(error);
        }
      );
    } else {
      alert('Geolocation not supported.');
    }
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <button onClick={handleClick}>Detect My Location</button>
    </div>
  );
}

export default GeoLocationButton;
