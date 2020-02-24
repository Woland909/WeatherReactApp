import React from 'react';
import s from './Form.module.css'
import { reduxForm, Field } from 'redux-form';
import {requiredField} from '../../../utils/Validators';
import {Input} from '../../common/FormControls/FormControls';

const CityNameForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field className={s.formCity} name="cityName" placeholder="Kharkiv" error={error} component={Input} type="text" validate={[requiredField]} />
            </div>
            <div>
                <button className={s.button} type="submit">Search city</button>
            </div>

        </form>
    )
}

const CityDayForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.formDay} name="Day" placeholder="1" component={Input} type="number" max="5" min="1"  validate={[requiredField]}/>
            </div>
            <div>
                <button className={s.button} type="submit">Get weather</button>
            </div>

        </form>
    )
}

const CityNameReduxForm = reduxForm({
    // a unique name for the form
    form: 'CityName',
})(CityNameForm)

const CityDayReduxForm = reduxForm({
    // a unique name for the form
    form: 'Day',
})(CityDayForm)


const CitySearchForm = (props) => {
    const submit = (values) => {
        props.addCityName(values.cityName)
        props.addCityName5day(values.cityName)
    }
    const submitDay = (values) => {
        props.addDay(values.Day-1)
    }

    return (
        <div>
            <h2>Input your city name</h2>
            <CityNameReduxForm onSubmit={submit} />
            <div className={s.get5dayTxt}>Get 5 days weather</div>
            <CityDayReduxForm onSubmit={submitDay} />
        </div>
    )
}

export default CitySearchForm;