import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city: "Delhi",
        feelsllike: 24.88,
        temp: 25.05,
        tempmin: 25.05,
        tempmax: 25.05,
        humidity: 47,
        weather: "haze",
    });
    let updateInfo = (result) => {
            setWeatherInfo(result);
        }
    return (
        <div style={{textAlign: "center"}}>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}