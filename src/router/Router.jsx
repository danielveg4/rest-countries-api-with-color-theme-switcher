import { Route, Routes } from "react-router-dom";
import Main from "../components/main/Main";
import CountryPage from '../pages/CountryPage';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/country/:id" element={<CountryPage />} />
        </Routes>
    );
}

export default Router;