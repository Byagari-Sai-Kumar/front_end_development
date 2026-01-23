import { combineReducers } from "redux";
import { createStore } from "redux";
import {cakeReducer} from './cakes/cakeReducer'
import {icecreamReducer} from './icecream/icecreamReducer'

const rootReducer = combineReducers({
    cakes: cakeReducer,
    icecream: icecreamReducer
})

const rootRestaurantStore = createStore(rootReducer);

export default rootRestaurantStore