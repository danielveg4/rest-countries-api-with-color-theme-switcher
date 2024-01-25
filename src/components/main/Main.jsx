import { useState, useEffect } from "react";
import Filters from "../filters/Filters";
import Countries from "../countries/countries";
import {StyledMain} from './styles';

const Main = () => {
    const [countries, setCountries] = useState([]);
    const [searchBy, setSearchBy] = useState("");
    const [regionFilter, setRegionFilter] = useState("All");

    const filteredCountries = filterByName(countries, searchBy).slice(0, 8);
    const filteredByRegion = filterRegion(filteredCountries, regionFilter);
  

    useEffect(() => {
        fetchCountries(setCountries);
    }, []);

    return (
        <StyledMain>
        <Filters
            onSearch={(value) => setSearchBy(value)}
            onRegionChange={(value) => setRegionFilter(value)}
        />
            <Countries data={filteredByRegion} />
        </StyledMain>
    );
};

const fetchCountries = async (setCountries) => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
};

const filterByName = (countries, searchBy) => {
    return countries.filter((country) => {
        return country.name.common.toLowerCase().includes(searchBy.toLowerCase());
    });
};

const filterRegion = (filteredCountries, value) => {
    if (value === "All") {
        return [...filteredCountries];
    }
    const filteredByRegion = filteredCountries.filter((country) => country.region === value);
    return filteredByRegion;
};


export default Main;