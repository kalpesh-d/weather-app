import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-HkXhDAUKq0LPpcuoOn5txYIv2tQGtH00LaavEJw5Erqfsr4pyK1Zlm0-pmByMlhECZw&usqp=CAU');
  background-size: cover;
  background-position: center;
  color: white;
  position: relative;
  padding-top: 10px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

export const Header = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
  z-index: 1;
  gap: 20px;
`;

export const AppTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  white-space: nowrap;
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex: 1;
  max-width: 500px;
  margin: 0 20px;
`;

export const SearchInput = styled.input`
  padding: 0.8rem 1.2rem;
  font-size: 1.1rem;
  border-radius: 4px;
  width: 100%;
  background: transparent;
  border: 1px solid white;
  color: white;
  outline: none;

  &::placeholder {
    color: #ffffff67;
  }
`;

export const SearchButton = styled.button`
  padding: 0.9rem 1.5rem;
  font-size: 1.1rem;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  border-radius: 4px;
  white-space: nowrap;

  &:hover {
    background-color: #0056b3;
  }
`;

export const LocationTime = styled.div`
  font-size: 1.2rem;
  white-space: nowrap;
  line-height: 0.2rem;
`;

export const TimeDisplay = styled.div`
  font-size: 1rem;
  opacity: 0.9;
`;

export const UnitToggle = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid white;
  border-radius: 4px;
  color: white;
  padding: 0.9rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;
  white-space: nowrap;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`; 