import React from 'react';
import s from './Weather5dayItem.module.css';


const Weather5dayItem = (props) => {
    let src= "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/"+props.weather.weather[0].icon+".png";
    return (
        <ul className={s.weather}>
            <div className={s.date}>{props.weather.dt_txt}</div>
            <li className={s.item}><img className={s.weatherImg} src={src}/></li>        
            <li className={s.item}>Temperature: {props.weather.main.temp} &#8451;</li>
            <li className={s.item}>Feels like: {props.weather.main.feels_like} &#8451;</li>
            <li className={s.item}>Description: {props.weather.weather[0].description} </li>
            <li className={s.item}>Wind speed: {props.weather.wind.speed} m/s</li>   
        </ul>
    )
}

export default Weather5dayItem;