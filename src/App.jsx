import { useEffect, useState } from 'react';
import { useWeather } from './context/WeatherContext';
import WeatherDisplay from './components/WeatherDisplay';
import ErrorDisplay from './components/ErrorDisplay';
import {
  AppContainer,
  Header,
  AppTitle,
  SearchForm,
  SearchInput,
  SearchButton,
  LocationTime,
  TimeDisplay
} from './styles/App.styles';

const WeatherApp = () => {
  const { city, setCity, weatherData, setError, isLoading } = useWeather();
  const [inputValue, setInputValue] = useState('');
  const [localTime, setLocalTime] = useState('');

  const validateCity = async (cityName) => {
    try {
      await setCity(cityName);
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      await validateCity(inputValue.trim());
      setInputValue('');
    }
  };

  useEffect(() => {
    if (weatherData?.currentWeather?.timezone) {
      const updateTime = () => {
        const now = new Date();
        const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
        const localTime = new Date(utcTime + (weatherData.currentWeather.timezone * 1000));
        setLocalTime(localTime.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        }));
      };

      updateTime();
      const intervalId = setInterval(updateTime, 1000);
      return () => clearInterval(intervalId);
    }
  }, [weatherData?.currentWeather?.timezone]);

  return (
    <AppContainer>
      <Header>
        <AppTitle>Weather Dashboard</AppTitle>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter city name..."
            aria-label="City name"
            disabled={isLoading}
          />
          <SearchButton
            type="submit"
            aria-label="Search weather"
            disabled={isLoading}
          >
            {isLoading ? 'Searching...' : 'Search'}
          </SearchButton>
        </SearchForm>
        <LocationTime>
          <p style={{ textTransform: 'capitalize' }}>{city || 'Select a city'}</p>
          {localTime && <TimeDisplay>{localTime}</TimeDisplay>}
        </LocationTime>
      </Header>
      <ErrorDisplay />
      <WeatherDisplay />
    </AppContainer>
  );
};

const App = () => {
  return <WeatherApp />;
};

export default App;