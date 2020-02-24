import React from 'react';
import Weather from './Weather';
import { requestWeather } from '../../../redux/weatherReducer';
import { connect } from 'react-redux';
import Preloader from '../../common/Preloader/Preloader';

class WeatherContainer extends React.Component {


    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : <Weather
                temp={this.props.temp}
                city={this.props.city}
                country={this.props.country}
                sunrise={this.props.sunrise}
                sunset={this.props.sunset}
                windSpeed={this.props.windSpeed}
                icon={this.props.icon}
                description={this.props.description}
            />}
            
        </>
    }

}

let mapStateToProps = (state) => {

    return {
        temp: state.weather.temp,
        city: state.weather.city,
        country: state.weather.country,
        sunrise: state.weather.sunrise,
        sunset: state.weather.sunset,
        windSpeed: state.weather.windSpeed,
        icon: state.weather.icon,
        description: state.weather.description,
        isFetching: state.weather.isFetching,
    }
}

export default connect(mapStateToProps, { requestWeather })(WeatherContainer)
