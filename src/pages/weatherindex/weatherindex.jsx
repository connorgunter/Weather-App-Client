import { useState } from "react";
import LoginButton from "../../components/Auth/LoginButton";
import "./weatherindex.css";
import findLocation from "../../utilities/weather-service";
import { saveFavoriteLocation } from "../../utilities/weather-service";
import { useAuth0 } from "@auth0/auth0-react";
import moment from "moment";

const Index = () => {
  const [searchWeather, setSearchWeather] = useState("");
  const [weather, setWeather] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const { user, isAuthenticated } = useAuth0();

  const getLocation = async (e) => {
    e.preventDefault();
    try {
      const locationResponse = await findLocation(searchWeather);
      setWeather(locationResponse);
      setIsSaved(false);
      console.log(locationResponse);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setSearchWeather(e.target.value);
  };

  const saveToFavorites = async () => {
    const authId = user.sub.substring(user.sub.indexOf("|") + 1);
    console.log(weather);
    const saved = await saveFavoriteLocation({
      authId: authId,
      favorites: [{ name: weather.location.name, locationData: { weather } }],
    });
    console.log(saved);
    setIsSaved(true);
  };

  return (
    <div className="index-body">
      {!weather ? (
        <form className="search-box" onSubmit={getLocation}>
          <div className="inputBox">
            <input
              value={searchWeather}
              onChange={handleChange}
              required={true}
            />
            <span>Search Location</span>
          </div>
          <br />
          <br />
          <button className="search-btn" type="submit">Search</button>
        </form>
      ) : null}
      <div>
        {weather ? (
          <div className="weather-card">
            <h2 className="current-temp">{weather.current.temp_f}°F</h2>
            <div className="info-section">
              <h1>
                Weather for: {weather.location.name} on{" "}
                {moment(weather.forecast.forecastday[0].date).format("L")}
              </h1>
              <h2>Condition: {weather.current.condition.text}</h2>
              <h2>
                Wind Speed: {weather.current.wind_mph} mph, Blowing{" "}
                {weather.current.wind_dir}
              </h2>
            </div>
            <br />
            <div className="btn-box">
              {!isAuthenticated ? (
                <LoginButton />
              ) : (
                <button className={`save-btn ${isSaved ? "saved" : ""}`} onClick={saveToFavorites}>
                  {isSaved ? "Saved" : "Save to Favorites"}
                </button>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Index;
