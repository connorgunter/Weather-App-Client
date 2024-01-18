import config from "../config";

export async function searchLocation(q) {
  const response = await fetch(`${config.BASE_URL}?q=${q}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const locationData = await response.json();
    return locationData;
  } else {
    console.log("Invalid Location");
  }
}


export async function saveFavorites() {
  const favoritesData = await fetch(`${config.FAVORITES_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: favoritesData,
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Invalid request");
  }
}