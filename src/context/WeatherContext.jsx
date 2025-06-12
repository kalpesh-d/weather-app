import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState(() => {
    const savedCity = localStorage.getItem('lastSearchedCity');
    return savedCity || 'Delhi';
  });
  const [unit, setUnit] = useState('metric');

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const BASE_URL = 'https://api.openweathermap.org/data/2.5';

  const fetchAllWeatherData = useCallback(async (cityName) => {
    if (!cityName) return;

    setIsLoading(true);
    setError(null);
    try {
      const currentWeatherResponse = await axios.get(
        `${BASE_URL}/weather?q=${cityName}&units=${unit}&appid=${API_KEY}`
      );
      const forecastResponse = await axios.get(
        `${BASE_URL}/forecast?q=${cityName}&units=${unit}&appid=${API_KEY}`
      );
      setWeatherData({ currentWeather: currentWeatherResponse.data, forecast: forecastResponse.data });
      localStorage.setItem('lastSearchedCity', cityName);
    } catch (err) {
      if (err.response?.status === 404) {
        setError('City not found. Please enter a valid city name.');
      } else {
        setError(err.message || 'Failed to fetch weather data');
      }
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  }, [unit]);

  useEffect(() => {
    fetchAllWeatherData(city);
    const intervalId = setInterval(() => fetchAllWeatherData(city), 30000);
    return () => clearInterval(intervalId);
  }, [city, fetchAllWeatherData]);

  const setCityAndFetch = useCallback((newCity) => {
    setCity(newCity);
    fetchAllWeatherData(newCity);
  }, [fetchAllWeatherData]);

  const retryLastSearch = useCallback(() => {
    fetchAllWeatherData(city);
  }, [city, fetchAllWeatherData]);

  const value = {
    weatherData,
    setWeatherData,
    error,
    setError,
    isLoading,
    setIsLoading,
    city,
    setCity: setCityAndFetch,
    unit,
    setUnit,
    retryLastSearch
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
}; 