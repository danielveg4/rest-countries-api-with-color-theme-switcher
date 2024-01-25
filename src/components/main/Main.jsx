import { useState, useEffect } from "react";
import Filters from "../filters/Filters";
import Countries from "../countries/countries";
import {StyledMain} from './styles';
import { useNavigate } from "react-router-dom";

const Main = () => {
    const [countries, setCountries] = useState([]);
    const [searchBy, setSearchBy] = useState("");
    const [regionFilter, setRegionFilter] = useState("All");

    const filteredCountries = filterByName(countries, searchBy);
    const filteredByRegion = filterRegion(filteredCountries, regionFilter).slice(0, 8);
  
    const navigate = useNavigate();

    useEffect(() => {
        fetchCountries(setCountries);
    }, []);

    const handleCountryClick = (data) => {
        navigate(`/country/${data.id}`, { state: { country: data } });
    };

    return (
        <StyledMain>
        <Filters
            onSearch={(value) => setSearchBy(value)}
            onRegionChange={(value) => setRegionFilter(value)}
        />
            <Countries data={filteredByRegion} onCountryClick={handleCountryClick} />
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