import findLocation from "../../utilities/weather-service";
import { useParams, useNavigate } from "react-router-dom";
import { deleteFavorite, getFavorite } from "../../utilities/weather-service";
import { useState, useEffect } from "react";

const WeatherInfo = () => {
  const [fav, setFav] = useState(null)
  const { id } = useParams();
  const navigate = useNavigate();
  
  async function handleRequest() {
    const favDetails = await getFavorite(id);
    setFav(favDetails);
    console.log(favDetails)
  }

  useEffect(() => {
    handleRequest();
  }, []);


  const handleDelete = async () => {
    try {

      const deletedFav = await deleteFavorite(id);
      console.log(deletedFav)
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
      <h2>{fav.locationData.weather}</h2>
      </div>
    ) : <p>Loading...</p>}
    </>
  );
};

export default WeatherInfo;
