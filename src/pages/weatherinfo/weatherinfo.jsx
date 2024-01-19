import findLocation from "../../utilities/weather-service";


const WeatherInfo = () => {
    const getLocation = async (e) => {
        e.preventDefault();
        try {
          const locationResponse = await findLocation(searchWeather);
          setWeather(locationResponse);
          console.log(locationResponse.location);
        } catch (err) {
          console.log(err);
        }
      };
    return (
        <>
        <h1>Weather Details Page</h1>
        </>
    )
}

export default WeatherInfo