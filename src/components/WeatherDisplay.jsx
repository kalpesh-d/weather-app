import { format } from 'date-fns';
import { useWeather } from '../context/WeatherContext';
import { WiDaySunny, WiRain, WiSnow, WiCloudy, WiThunderstorm } from 'react-icons/wi';
import {
  WeatherContainer,
  CurrentWeather,
  WeatherIcon,
  Temperature,
  DateText,
  WeatherDetails,
  Detail,
  ForecastContainer,
  ForecastDay,
  ForecastIcon
} from '../styles/WeatherDisplay.styles';

const WeatherDisplay = () => {
  const { weatherData, isLoading, error, unit } = useWeather();

  if (isLoading) return <WeatherContainer>Loading...</WeatherContainer>;
  if (error) return null;
  if (!weatherData?.currentWeather) return <WeatherContainer>Search for a city</WeatherContainer>;

  const { currentWeather, forecast } = weatherData;
  const { temp, feels_like, humidity } = currentWeather.main;
  const { speed } = currentWeather.wind;
  const weatherCondition = currentWeather.weather[0].main;

  const dailyForecast = forecast.list.reduce((acc, current) => {
    const date = format(new Date(current.dt * 1000), 'yyyy-MM-dd');
    if (!acc.find(item => format(new Date(item.dt * 1000), 'yyyy-MM-dd') === date)) {
      acc.push(current);
    }
    return acc;
  }, []).slice(0, 6);

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'Clear':
        return <WiDaySunny />;
      case 'Rain':
        return <WiRain />;
      case 'Snow':
        return <WiSnow />;
      case 'Clouds':
        return <WiCloudy />;
      case 'Thunderstorm':
        return <WiThunderstorm />;
      default:
        return <WiDaySunny />;
    }
  };

  return (
    <WeatherContainer>
      <CurrentWeather>
        <WeatherIcon>{getWeatherIcon(weatherCondition)}</WeatherIcon>
        <Temperature>{Math.round(temp)}°</Temperature>
        <DateText>{format(new Date(), 'EEEE, MMMM do')}</DateText>
        <WeatherDetails>
          <Detail>Feels like: {Math.round(feels_like)}°</Detail>
          <Detail>Humidity: {humidity}%</Detail>
          <Detail>Wind: {Math.round(speed)} {unit === 'metric' ? 'm/s' : 'mph'}</Detail>
        </WeatherDetails>
      </CurrentWeather>

      <ForecastContainer>
        {dailyForecast.map((day, index) => (
          <ForecastDay key={index}>
            <div>{format(new Date(day.dt * 1000), 'EEE')}</div>
            <ForecastIcon>{getWeatherIcon(day.weather[0].main)}</ForecastIcon>
            <div>{Math.round(day.main.temp)}°</div>
          </ForecastDay>
        ))}
      </ForecastContainer>
    </WeatherContainer>
  );
};

export default WeatherDisplay;