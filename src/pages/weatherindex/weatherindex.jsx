import { useState } from "react";
import { Link } from "react-router-dom";
import "./weatherindex.css";
import findLocation from "../../utilities/weather-service";
import { saveFavoriteLocation } from "../../utilities/weather-service";
import { useAuth0 } from "@auth0/auth0-react";
const Index = ({ favorites, setFavorites }) => {
  // const [favorites, setFavorites] = useState([])
  const [searchWeather, setSearchWeather] = useState("");
  const [weather, setWeather] = useState(null);
  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    const authId = user.sub.substring(user.sub.indexOf("|") + 1);
  }
  const getLocation = async (e) => {
    e.preventDefault();
    try {
      const locationResponse = await findLocation(searchWeather);
      setWeather(locationResponse);
      console.log(locationResponse.location);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setSearchWeather(e.target.value);
  };

  const saveToFavorites = async (save) => {
    const authId = user.sub.substring(user.sub.indexOf("|") + 1);
    console.log(weather)
    const saved = await saveFavoriteLocation({authId: authId, favorites: [{name: weather.location.name, locationData:{weather}}]})
    console.log(saved)
  }

  return (
    <div>
      <form className="search-box" onSubmit={getLocation}>
        <input
          className="input-field"
          value={searchWeather}
          onChange={handleChange}
          placeholder="Search for Location Here"
          required={true}
        />
        <br />
        <br />
        <button type="submit">Search Weather By Location</button>
      </form>
      <div>
        {weather ? (
          <div className="weather-card">
            <Link to={`/weather/${weather.location.name}`}>
            <h2 className="current-temp">{weather.current.temp_f}°F</h2>
            <hr />
            <div className="info-section">
              <h1>
                Weather for: {weather.location.name} on{" "}
                {weather.forecast.forecastday[0].date}
              </h1>
              <h2>Condition: {weather.current.condition.text}</h2>
              <h2>
                Wind Speed: {weather.current.wind_mph} mph, Blowing{" "}
                {weather.current.wind_dir}
              </h2>
            </div>
          </Link>
              <button onClick={saveToFavorites(save)}>Save to Favorites</button>
          </div>
        ) : (
          console.log("No Data Yet")
        )}
      </div>
    </div>
  );
};
export default Index;
