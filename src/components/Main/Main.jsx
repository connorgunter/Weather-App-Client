import { Routes, Route } from "react-router-dom";
import WeatherIndex from "../../pages/weatherindex/weatherindex";
import Profile from "../../pages/Profile";
import Favorites from "../../pages/Favorites/favorites";
import WeatherInfo from "../../pages/weatherinfo/weatherinfo"
import { useState } from "react";
const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WeatherIndex />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/weather/:id" element={<WeatherInfo />} />
      </Routes>
    </div>
  );
};

export default Main;
