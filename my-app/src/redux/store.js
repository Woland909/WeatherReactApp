import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import weatherReducer from './weatherReducer';
import weather5dayReducer from './weather5dayReducer';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    weather: weatherReducer,
    weather5day: weather5dayReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;