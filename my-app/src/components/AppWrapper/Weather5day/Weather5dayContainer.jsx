import React from 'react';
import Weather5day from './Weather5day';
import { requestWeather5day } from '../../../redux/weather5dayReducer';
import { connect } from 'react-redux';
import Preloader from '../../common/Preloader/Preloader';

class Weather5dayContainer extends React.Component {

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : <Weather5day
                weather5day={this.props.weather5day}
                day={this.props.day}
            />}

        </>
    }

}

let mapStateToProps = (state) => {
    return {
        weather5day: state.weather5day.weather5day,
        day: state.weather5day.day,
        icon: state.weather5day.icon5day
    }
}

export default connect(mapStateToProps, { requestWeather5day })(Weather5dayContainer)
