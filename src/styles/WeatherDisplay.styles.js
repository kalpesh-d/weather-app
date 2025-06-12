import styled from 'styled-components';

export const WeatherContainer = styled.div`
  margin: 0 auto;
`;

export const CurrentWeather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const WeatherIcon = styled.div`
  font-size: 6rem;
`;

export const Temperature = styled.h2`
  font-size: 4rem;
  margin: 0.5rem 0;
`;

export const DateText = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

export const WeatherDetails = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 0;
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
`;

export const ForecastContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ForecastDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const ForecastIcon = styled.div`
  font-size: 3rem;
`; 