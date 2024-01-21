import findLocation from "../../utilities/weather-service";
import { useParams, useNavigate } from "react-router-dom";
import { deleteFavorite } from "../../utilities/weather-service";

const WeatherInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  



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
      <h1>Weather Details Page</h1>
      <button onClick={handleDelete}>Remove From Favorites</button>
    </>
  );
};

export default WeatherInfo;
