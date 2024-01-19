import { useState, useEffect } from "react";
import { viewFavoriteLocation } from "../../utilities/weather-service";
import { useAuth0 } from "@auth0/auth0-react";
import "./favorites.css"
import { useParams, useNavigate, Link } from "react-router-dom";


const Favorites = () => {
  const [userFavorites, setUserFavorites] = useState([]);
  const { user, isAuthenticated } = useAuth0();
  const getFavorites = async () => {
    try {
      const authId = user.sub.substring(user.sub.indexOf("|") + 1);
      const favResponse = await viewFavoriteLocation();
      const filteredUser = favResponse.filter((el) => el.authId === authId);
      setUserFavorites(filteredUser);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFavorites();
  }, [user]);


  return (
    <>
    <h1>Favorites Page</h1>
    {userFavorites === null ? (
      <h1>Loading...</h1>
    ) : userFavorites.length > 0 ? (
      <div className="grid-container">
        {userFavorites[0]?.favorites.map((favorite, index) => (
          <div key={index} className="fav-loc-card">
            <Link to={`/favorites/${favorite._id}`}> {/* Assuming each favorite has an 'id' field */}
              <h1>{favorite.name}</h1>
              <h2>{favorite.locationData.weather.current.temp_f}°F</h2>
              <h2>Wind Speed: {favorite.locationData.weather.current.wind_mph} MPH</h2>
              <h2>Humidity: {favorite.locationData.weather.current.humidity}%</h2>
            </Link>
          </div>
        ))}
      </div>
    ) : (
      <h1>Loading...</h1>
    )}
  </>
);
};

export default Favorites;
