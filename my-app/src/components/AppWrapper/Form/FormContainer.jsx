import React from 'react';
import CitySearchForm from './Form';
import { requestWeather, toggleWeatherInProgress } from '../../../redux/weatherReducer';
import { requestWeather5day, addDay } from '../../../redux/weather5dayReducer';
import { connect } from 'react-redux';

class FormContainer extends React.Component {
    componentDidMount() {
        this.props.requestWeather("Kharkiv")
        this.props.requestWeather5day("Kharkiv")
    }
    render() {
        return <>
            <CitySearchForm
                addCityName={this.props.requestWeather}
                addCityName5day={this.props.requestWeather5day}
                addDay={this.props.addDay}
                toggleWeatherInProgress={this.toggleWeatherInProgress}
            />

        </>
    }
}
let mapStateToProps = (state) => {
    return {
        getCityName: state.weather5day.addCityName,
        getDay: state.weather5day.day,
        weatherInProgress: state.weather.weatherInProgress
    }
}



export default connect(mapStateToProps, { requestWeather, requestWeather5day, addDay, toggleWeatherInProgress })(FormContainer)
