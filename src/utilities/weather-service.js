import * as weatherAPI from "./weather-api";

export default async function findLocation(q) {
  try {
    const location = await weatherAPI.searchLocation(q);
    return location;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
}

export async function saveFavoriteLocation(data) {
  try {
    const fav = await weatherAPI.saveFavorites(data)
    return fav
  } catch (err) {
    console.log(err.message)
    throw err
  }
}

export async function viewFavoriteLocation(authId) {
  try {
    const view = await weatherAPI.viewFavorites(authId)
    console.log({view})
    return view
  } catch(err){
    console.log(err)
  }
}

export async function deleteFavorite(id) {
  try {
    const deletedFavorite = await weatherAPI.destroy(id);
    return deletedFavorite;
  } catch (err) {
    throw err;
  }
}


export async function getFavorite(id) {
  try {
    const weatherId = await weatherAPI.show(id);
    if (weatherId) {
      return weatherId;
    } else {
      console.log("no favorite found", id);
    }
  } catch (err) {
    console.log(err.message);
  }
}