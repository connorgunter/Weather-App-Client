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


export async function saveFavorites(data) {
  const favoritesData = await fetch(config.FAVORITES_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(data.authId)
  if (favoritesData.ok) {
    return favoritesData.json();
  } else {
    throw new Error("Invalid request");
  }
}

export async function viewFavorites(authId) {
  const data = await fetch(config.FAVORITES_URL+ "/view", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  if (data.ok) {
    const favoriteData = await data.json();
    console.log({favoriteData})
    return favoriteData;
  } else {
    console.log("Invalid Location");
  }
}

export async function destroy(id) {
  const url = `${config.FAVORITES_URL}/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}

export async function show(id) {
  const res = await fetch(config.FAVORITES_URL + `/${id}`, { method: "GET" });
  if (res.ok) {
    return res.json();
  } else {
    console.log(err.message);
  }
}