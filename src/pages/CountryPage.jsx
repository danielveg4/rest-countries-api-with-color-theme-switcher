import { useParams } from "react-router-dom";

const CountryPage = () => {
    const { id } = useParams();
  
    return (
      <div>
        <h2>País</h2>
        <p>{id}</p>
      </div>
    );
};

export default CountryPage;
