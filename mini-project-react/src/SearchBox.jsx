import TextField from '@mui/material/TextField';
import "./SearchBox.css"
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    let handleChange = (evt) => {
        setCity(evt.target.value);
    };
    let handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        await getCityInfo();
        setCity("");
    };
    const limit = 1;
    const CITY_API_URL = "https://api.openweathermap.org/geo/1.0/direct";
    const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_key = "85f24a6a6ae995e4e208ecddb4292123";
    const kelvinToCelsius = (k) => typeof k === "number" ? Number((k - 273.15).toFixed(2)) : null;

    let getCityInfo = async () => {
        const response = await fetch(`${CITY_API_URL}?q=${city}&limit=${limit}&appid=${API_key}`);
        const data = await response.json();
        const location = data[0];
        if (!location) {
            console.error("City not found");
            return;
        }
        const weatherInfo = await fetch(`${WEATHER_API_URL}?lat=${location.lat}&lon=${location.lon}&appid=${API_key}`);
        const weatherData = await weatherInfo.json();
        console.log(weatherData);
        let result = {
            // city: `${location.name}${location.state ? ', ' + location.state : ''}${location.country ? ', ' + location.country : ''}`,
            // tempInKelvin: weatherData.main.temp,
            // humidity: weatherData.main.humidity,
            // grounLevel: weatherData.main.grnd_level,
            // windSpeed: weatherData.wind.speed,
            // seaLevel: weatherData.main.sea_level,
            // sunrise: weatherData.sys.sunrise,
            // sunset: weatherData.sys.sunset,
            city: `${location.name}${location.state ? ', ' + location.state : ''}${location.country ? ', ' + location.country : ''}`,
            temp: kelvinToCelsius(weatherData?.main?.temp),
            tempmin: kelvinToCelsius(weatherData?.main?.temp_min),
            tempmax: kelvinToCelsius(weatherData?.main?.temp_max),
            humidity: weatherData?.main?.humidity ?? null,
            weather: weatherData?.weather?.[0]?.description ?? weatherData?.weather?.[0]?.main ?? '',
            feelsllike: kelvinToCelsius(weatherData?.main?.feels_like),
            _raw: weatherData
        };
        if (typeof updateInfo === "function") updateInfo(result);

    };
    return (
        <>
            <div className='SearchBox'>
                <form onSubmit={handleSubmit}>
                    <TextField id="outlined-basic"
                        label="City name"
                        variant="outlined"
                        required
                        onChange={handleChange}
                        value={city} />
                    <br></br> <br></br>
                    <Button variant="contained" type="submit">Search</Button>
                </form>
            </div>
        </>
    )
}