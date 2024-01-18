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

export async function saveFavoriteLocation() {
  try {
    const fav = await weatherAPI.saveFavorites()
    return fav
  } catch (err) {
    console.log(err.message)
    throw err
  }
}
