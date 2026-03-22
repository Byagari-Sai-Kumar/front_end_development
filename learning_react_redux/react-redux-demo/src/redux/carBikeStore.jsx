import { createStore,combineReducers} from 'redux'
import {carReducer} from './cars/carReducer'
import {bikeReducer} from './bikes/bikeReducer'

const carBikeCombineReducers = combineReducers({
    cars: carReducer,
    bikes: bikeReducer
})

export const carBikeCombineStore = createStore(carBikeCombineReducers);