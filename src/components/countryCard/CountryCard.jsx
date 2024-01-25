import { StyledCard, StyledImg, StyledName, StyledText} from './styles';

const CountryCard = ({ data }) => {
    return (
      <StyledCard>
        <StyledImg src={data.flags.svg} alt='' />
        <StyledName>{data.name.common}</StyledName>
        <StyledText>Population: {data.population}</StyledText>
        <StyledText>Region: {data.region}</StyledText>
        <StyledText>Capital: {data.capital}</StyledText>
      </StyledCard>
    );
};
  
export default CountryCard;