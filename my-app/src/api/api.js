import * as axios from 'axios';
const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';
const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
})

export const weatherAPI = {
    getWeather(city) {
        return instance.get(`weather?q=${city}&units=metric&mode=json&appid=${openWeatherApiKey}`)
            .then(response => {
                return response.data
            })
            .catch(error => {
                return error.response.data
            });
    },
    getWeather5Day(city) {
        return instance.get(`forecast?q=${city}&units=metric&mode=json&appid=${openWeatherApiKey}`)
            .then(response => response.data);
    }
}
