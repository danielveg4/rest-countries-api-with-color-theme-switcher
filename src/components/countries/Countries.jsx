import CountryCard from "../countryCard/CountryCard";
import { StyledContainer } from "./styles";

const Countries = ({ data, onCountryClick }) => {
  return (
    <StyledContainer>
      {data.map((country) => (
        <CountryCard
          key={country.alpha3Code}
          data={country}
          onCountryClick={onCountryClick} 
        />
      ))}
    </StyledContainer>
  );
};

export default Countries;