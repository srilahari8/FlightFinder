import React from 'react';

function WeatherDisplay({ data }) {
  if (!data || !data.city) return null;

  return (
    <div>
      <h2>Weather Forecast for {data.city.name}, {data.city.country}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {data.list.slice(0, 5).map((item, index) => (
          <div key={index} style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <p><strong>{new Date(item.dt_txt).toLocaleString()}</strong></p>
            <p>Temp: {item.main.temp} °C</p>
            <p>{item.weather[0].main} - {item.weather[0].description}</p>
            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="icon" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDisplay;
