import { Routes, Route } from "react-router-dom";
import WeatherIndex from "../../pages/weatherindex/weatherindex";
import Profile from "../../pages/Profile";
const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WeatherIndex />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Main;
