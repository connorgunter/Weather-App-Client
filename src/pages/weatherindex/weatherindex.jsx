import { useState } from "react";
import "./weatherindex.css";
import findLocation from "../../utilities/weather-service";
const Index = ({favorites, setFavorites}) => {
  // const [favorites, setFavorites] = useState([])
  const [searchWeather, setSearchWeather] = useState("");
  const [weather, setWeather] = useState(null);

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

  const saveToFavorites = () => {
    setFavorites(prevFavorites => [...prevFavorites, weather])
  }
  console.log(favorites)

  return (
    <div>
      <form className="search-box" onSubmit={getLocation}>
        <input
          className="input-field"
          value={searchWeather}
          onChange={handleChange}
          placeholder="Search for Location Here"
        /><br/><br/>
        <button type="submit">Search Weather By Location</button>
      </form>
      <div>
        {weather ? (
          <div className="weather-card">
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
              <button onClick={saveToFavorites}>Save to Favorites</button>
            </div>
          </div>
        ) : (
          <p>Nothing</p>
        )}
      </div>
    </div>
  );
};
export default Index;
