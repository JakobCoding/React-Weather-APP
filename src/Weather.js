import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Perth&units=metric&appid=532ec87a1f596f31b5d76eb2890b78d7`
        
      );
      setWeatherData(response.data);
    };
    fetchData();
  }, []);

  
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const temperature = Math.round(weatherData.main.temp);
  const weatherDescription = weatherData.weather[0].description;
  const city = weatherData.name;
  const country = weatherData.sys.country;

  return (
    <div>
      <h2>
        Weather in {city}, {country}
      </h2>
      <p>Temperature: {temperature}°C</p>
      <p>Description: {weatherDescription}</p>
    </div>
  );
};

export default Weather;

