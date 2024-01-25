import CountryCard from "../countryCard/CountryCard";
import {StyledContainer} from './styles';

const Countries = ({ data }) => {
    return (
    <StyledContainer>

        {data.map((country) => (
          <CountryCard key={country.alpha3Code} data={country} />
        ))}

    </StyledContainer>
    );
  };
  
  export default Countries;