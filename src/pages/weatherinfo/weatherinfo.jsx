import findLocation from "../../utilities/weather-service";
import { useParams, useNavigate } from "react-router-dom";
import { deleteFavorite, getFavorite } from "../../utilities/weather-service";
import { useState, useEffect } from "react";
import "./weatherinfo.css";
const WeatherInfo = () => {
  const [fav, setFav] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  async function handleRequest() {
    const favDetails = await getFavorite(id);
    setFav(favDetails);
    console.log(favDetails);
  }

  useEffect(() => {
    handleRequest();
  }, []);

  const handleDelete = async () => {
    try {
      const deletedFav = await deleteFavorite(id);
      console.log(deletedFav);
      navigate("/favorites");
    } catch (err) {
      console.log(err);
      navigate(`/favorites/${id}`);
    }
  };
  return (
    <>
      {fav ? (
        <div>
          <h1>Weather Details Page</h1>
          <button onClick={handleDelete}>Remove From Favorites</button>
          <h1>{fav.name}</h1>
          <h2>Feels Like:{fav.locationData.weather.current.feelslike_f}</h2>
          <h2>Wind Speed:{fav.locationData.weather.current.wind_mph}</h2>
          <h2>
            Average Temperature:
            {fav.locationData.weather.forecast.forecastday[0].day.avgtemp_f}°F
          </h2>
          <h2>
            Minimum Temperature:
            {fav.locationData.weather.forecast.forecastday[0].day.mintemp_f}°F
          </h2>
          <h2>
            Maximum Temperature:
            {fav.locationData.weather.forecast.forecastday[0].day.maxtemp_f}°F
          </h2>
          {fav.locationData.weather.forecast.forecastday[0].day
            .daily_will_it_snow === 0 ? (
            <h2>Will it snow? No</h2>
          ) : (
            <h2>Will it snow? Yes</h2>
          )}
          {fav.locationData.weather.forecast.forecastday[0].day
            .daily_will_it_rain === 0 ? (
            <h2>Will it rain? No</h2>
          ) : (
            <h2>Will it rain? Yes</h2>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default WeatherInfo;
