import {StyledInput, StyledFilterMenu, StyledSelect} from './styles'

const Filters = ({ onSearch, onRegionChange }) => {
    return (
      <StyledFilterMenu>
        <StyledInput
          type="text"
          placeholder="Search for a country..."
          onChange={(event) => onSearch(event.target.value)}
        />
        <StyledSelect
          name=""
          id=""
          onChange={(event) => onRegionChange(event.target.value)}
        >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </StyledSelect>
      </StyledFilterMenu>
    );
  };
  
  export default Filters;