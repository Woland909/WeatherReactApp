import React from "react";
import s from './AppWrapper.module.css';
import WeatherContainer from './Weather/WeatherContainer';
import Weather5dayContainer from './Weather5day/Weather5dayContainer'
import FormContainer from "./Form/FormContainer";

const AppWrapper = (props) => {
    return (
        <div className={s.appWrapper} >
            <div className={s.appForm}>
                <FormContainer/>
            </div>
            <div className={s.appWeather}>
                <WeatherContainer />
                <div className={s.Weather5dayContainer}>
                    <h1 className={s.title}>Find out the weather in your city</h1>
                    <div>
                        <Weather5dayContainer />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AppWrapper;