import { useState } from 'react';
import styled from 'styled-components';
import { useWeather } from '../context/WeatherContext';
import { FiSearch, FiX } from 'react-icons/fi';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.5rem;
  width: 300px;
  transition: all 0.3s ease;
  opacity: ${props => props.isVisible ? '1' : '0'};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(-10px)'};
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const BaseButtonStyle = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const SearchButton = styled(BaseButtonStyle)`
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ToggleButton = styled(BaseButtonStyle)``;

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { setCity, isLoading } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setCity(inputValue.trim());
      setInputValue('');
      setIsSearchVisible(false);
    }
  };

  if (!isSearchVisible) {
    return (
      <SearchContainer>
        <ToggleButton onClick={() => setIsSearchVisible(true)} aria-label="Show search">
          <FiSearch size={20} />
        </ToggleButton>
      </SearchContainer>
    );
  }

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit} isVisible={isSearchVisible}>
        <SearchInput
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search city..."
          aria-label="City name"
          disabled={isLoading}
          autoFocus
        />
        <SearchButton
          type="submit"
          aria-label="Search weather"
          disabled={isLoading || !inputValue.trim()}
        >
          <FiSearch size={20} />
        </SearchButton>
        <SearchButton
          type="button"
          onClick={() => setIsSearchVisible(false)}
          aria-label="Close search"
        >
          <FiX size={20} />
        </SearchButton>
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchBar; 