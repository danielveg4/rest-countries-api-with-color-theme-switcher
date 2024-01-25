import { StyledCard, StyledImg, StyledName, StyledText } from "./styles";
import { Link } from "react-router-dom";

const CountryCard = ({ data, id }) => {
  return (
    <Link to={`/country/${id}`}>
      <StyledCard>
        <StyledImg src={data.flags.svg} alt='' />
        <StyledName>{data.name.common}</StyledName>
        <StyledText>Population: {data.population}</StyledText>
        <StyledText>Region: {data.region}</StyledText>
        <StyledText>Capital: {data.capital}</StyledText>
      </StyledCard>
    </Link>
  );
};

export default CountryCard;