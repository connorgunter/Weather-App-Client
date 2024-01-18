import { useState, useEffect } from "react"
import { viewFavoriteLocation } from "../../utilities/weather-service"
import { useAuth0 } from "@auth0/auth0-react";
const Favorites = ({favorites}) => {
  const [userFavorites, setUserFavorites] = useState(null)
  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    const authId = user.sub.substring(user.sub.indexOf("|") + 1);
  }
  
  const getFavorites = async (e) => {
    try {
      const authId = user.sub.substring(user.sub.indexOf("|") + 1);
      const favResponse = await viewFavoriteLocation();
      setUserFavorites(favResponse[0].favorites);
      console.log("favResponse", favResponse[0].favorites)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getFavorites();
  }, []);

    return (
      <>
        <h1>Hello</h1>
      </>
    )
}

export default Favorites