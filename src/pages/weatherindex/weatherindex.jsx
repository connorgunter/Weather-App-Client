import { useState } from "react";
import "./weatherindex.css";
import findLocation from "../../utilities/weather-service";
const Index = () => {
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

  return (
    <div>
      <form onSubmit={getLocation}>
        <input
          value={searchWeather}
          onChange={handleChange}
          placeholder="Search for Location Here"
        />
        <button type="submit">Search Weather By Location</button>
      </form>
      <div>
        {weather ? (
          <div className="weather-card">
              <h2 className="current-temp">
                {weather.current.temp_f}°F
              </h2>
              <hr/>
            <div className="info-section">
              <h1>
                Weather for: {weather.location.name} on{" "}
                {weather.forecast.forecastday[0].date}
              </h1>
              <h2>
                Condition: {weather.current.condition.text}
              </h2>
              <h2>Wind Speed: {weather.current.wind_mph}</h2>
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
