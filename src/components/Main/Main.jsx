import { Routes, Route } from "react-router-dom";
import WeatherIndex from "../../pages/weatherindex/weatherindex";
import Profile from "../../pages/Profile";
import Favorites from "../../pages/Favorites/favorites";
import { useState } from "react";
const Main = () => {
  const [favorites, setFavorites] = useState([])
  return (
    <div>
      <Routes>
        <Route path="/" element={<WeatherIndex favorites={favorites} setFavorites={setFavorites}/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites}/>} />
      </Routes>
    </div>
  );
};

export default Main;
