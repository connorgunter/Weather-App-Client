import { Routes, Route } from "react-router-dom";
import WeatherIndex from "../../pages/weatherindex/weatherindex";
import Profile from "../../pages/Profile";
import Favorites from "../../pages/Favorites/favorites";
import WeatherInfo from "../../pages/weatherinfo/weatherinfo"
import About from "../../pages/About/About";
const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WeatherIndex />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/favorites/:id" element={<WeatherInfo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Main;
