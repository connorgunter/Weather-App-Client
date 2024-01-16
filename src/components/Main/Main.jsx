import { Routes, Route } from "react-router-dom";
import WeatherIndex from "../../pages/weatherindex/weatherindex";
const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WeatherIndex />} />
      </Routes>
    </div>
  );
};

export default Main;
