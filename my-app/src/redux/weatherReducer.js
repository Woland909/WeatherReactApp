import { weatherAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_TEMP = 'SET_TEMP';
const SET_CITY = 'SET_CITY';
const SET_COUNTRY = 'SET_COUNTRY';
const SET_SUNRISE = 'SET_SUNRISE';
const SET_SUNSET = 'SET_SUNSET';
const SET_WIND_SPEED = 'SET_WIND_SPEED';
const SET_ICON = 'SET_ICON';
const SET_DESCRIPTION = 'SET_DESCRIPTION';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_SET_WEATHER_PROGRESS = 'TOGGLE_SET_WEATHER_PROGRESS';

let initialState = {
    temp: '',
    city: 'Kharkov',
    country: '',
    sunrise: '',
    sunset: '',
    windSpeed: '',
    icon: '',
    isFetching: true,
    weatherInProgress: true,
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEMP: {
            return { ...state, temp: action.temp }
        }
        case SET_CITY: {
            return { ...state, city: action.city }
        }
        case SET_COUNTRY: {
            return { ...state, country: action.country }
        }
        case SET_SUNRISE: {
            let date = new Date(action.sunrise);
            let sunrise_date = date.getHours() + ':' + date.getMinutes();


            return { ...state, sunrise: sunrise_date }
        }
        case SET_SUNSET: {
            let date = new Date(action.sunset);
            let sunset_date = date.getHours() + ':' + date.getMinutes();
            return { ...state, sunset: sunset_date }
        }
        case SET_WIND_SPEED: {
            return { ...state, windSpeed: action.windSpeed }
        }
        case SET_ICON: {
            return { ...state, icon: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${action.icon}.png` }
        }
        case SET_DESCRIPTION: {
            return { ...state, description: action.description }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_SET_WEATHER_PROGRESS: {
            return { ...state, weatherInProgress: action.isFetching }
        }
        default:
            return state;
    }
}

export const setTemp = (temp) => ({ type: SET_TEMP, temp })
export const setCity = (city) => ({ type: SET_CITY, city })
export const setCountry = (country) => ({ type: SET_COUNTRY, country })
export const setSunrise = (sunrise) => ({ type: SET_SUNRISE, sunrise })
export const setSunset = (sunset) => ({ type: SET_SUNSET, sunset })
export const setWindSpeed = (windSpeed) => ({ type: SET_WIND_SPEED, windSpeed })
export const setIcon = (icon) => ({ type: SET_ICON, icon })
export const setDescription = (description) => ({ type: SET_DESCRIPTION, description })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleWeatherInProgress = (isFetching) => ({ type: TOGGLE_SET_WEATHER_PROGRESS, isFetching })

export const requestWeather = (city) => (
    async (dispatch) => {
        let data = await weatherAPI.getWeather(city)
        if (data.cod === 200) {
            dispatch(toggleIsFetching(false));
            dispatch(setTemp(data.main.temp));
            dispatch(setCity(data.name));
            dispatch(setCountry(data.sys.country));
            dispatch(setSunrise(data.sys.sunrise));
            dispatch(setSunset(data.sys.sunset));
            dispatch(setWindSpeed(data.wind.speed));
            dispatch(setIcon(data.weather[0].icon));
            dispatch(setDescription(data.weather[0].description));
        } else {
            let message = data.message.length > 0 ? data.message : "Error";
            dispatch(stopSubmit("CityName", { _error: message }))
        }

    }
)



export default weatherReducer;
