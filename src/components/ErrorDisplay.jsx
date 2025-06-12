import { useWeather } from '../context/WeatherContext';
import { FiAlertCircle, FiRefreshCw } from 'react-icons/fi';
import {
  ErrorContainer,
  ErrorMessage,
  RetryButton
} from '../styles/ErrorDisplay.styles';

const ErrorDisplay = () => {
  const { error, isLoading, retryLastSearch } = useWeather();

  if (!error) return null;

  return (
    <ErrorContainer>
      <ErrorMessage>
        <FiAlertCircle size={18} />
        <p>{error}</p>
      </ErrorMessage>
      {retryLastSearch && (
        <RetryButton
          onClick={retryLastSearch}
          disabled={isLoading}
        >
          <FiRefreshCw size={16} className={isLoading ? 'spin' : ''} />
          Try Again
        </RetryButton>
      )}
    </ErrorContainer>
  );
};

export default ErrorDisplay; 