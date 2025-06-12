# Weather Dashboard

A modern weather dashboard built with React.js that displays real-time weather information for any city.

## Features

- Search for weather by city name
- Display current weather conditions including temperature, humidity, and wind speed
- Toggle between Celsius and Fahrenheit
- Auto-refresh weather data every 30 seconds
- Responsive design with modern UI
- Error handling for API failures
- Local storage for last searched city

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Technologies Used

- React.js
- Vite
- Styled Components
- Axios
- OpenWeatherMap API
- React Icons
- Date-fns

## Project Structure

```
src/
  ├── components/
  │   ├── WeatherDisplay.jsx
  │   ├── ErrorDisplay.jsx
  │   └── SearchBar.jsx
  ├── styles/
  │   ├── App.styles.js
  │   ├── WeatherDisplay.styles.js
  │   └── ErrorDisplay.styles.js
  ├── context/
  │   └── WeatherContext.jsx
  ├── App.jsx
  └── main.jsx
```

## Contributing

Feel free to submit issues and enhancement requests!
