import { weatherAPI } from '../api/api';


const SET_WEATHER_5DAY = 'SET_WEATHER_5DAY';
const TOGGLE_IS_FETCHING_5DAY = 'TOGGLE_IS_FETCHING_5DAY';
const GET_DAY = 'GET_DAY';

let initialState = {
    weather5day: [],
    isFetching: true,
    day: '0',
}

const weather5dayReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_5DAY: {
            return { ...state, weather5day: action.weather5day }
        }
        case TOGGLE_IS_FETCHING_5DAY: {
            return { ...state, isFetching: action.isFetching }
        }
        case GET_DAY: {
            return { ...state, day: action.day }
        }
        default:
            return state;
    }
}


export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING_5DAY, isFetching })
export const setWeather5day = (weather5day) => ({ type: SET_WEATHER_5DAY, weather5day })
export const getDay = (day) => ({ type: GET_DAY, day })

export const requestWeather5day = (city) => (
    async (dispatch) => {
        let data = await weatherAPI.getWeather5Day(city)
        dispatch(toggleIsFetching(false));
        dispatch(setWeather5day(data.list));
    })

export const addDay = (day) => (
    async (dispatch) => {
        dispatch(getDay(day));
    })




export default weather5dayReducer;
