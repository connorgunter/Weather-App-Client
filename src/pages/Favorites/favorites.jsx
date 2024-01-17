import { useState, useEffect } from "react"
const Favorites = ({favorites}) => {
    return (
        <>
        <h1>Working</h1>
        {favorites.map((weather, index) => (
        <div key={index}>
          <h2>{weather.location.name}</h2>
          <p>{weather.current.temp_f}°F</p>
        </div>
      ))}
        </>
    )
}

export default Favorites