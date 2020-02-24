import React from 'react';
import s from './Weather.module.css';


const Weather = (props) => {

    return (
        <div className={s.weatherNow}>
            <ul className={s.weather}>
                <h2>Weather now</h2>
                <li><img src={props.icon} /></li>
                <li>Temperature: {props.temp} &#8451;</li>
                <li>Description: {props.description} </li>
                <li>Wind speed: {props.windSpeed} m/s</li>
                <li>City: {props.city}</li>
                <li>Country: {props.country}</li>
                <li>Sunrise: {props.sunrise}</li>
                <li>Sunset: {props.sunset}</li>
            </ul>
        </div>
    )
}

export default Weather;