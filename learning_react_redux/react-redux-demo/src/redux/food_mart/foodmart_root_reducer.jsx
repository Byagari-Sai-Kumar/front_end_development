import { combineReducers,createStore,applyMiddleware } from "redux";
import {composeWithDevTools} from '@redux-devtools/extension'
import logger from 'redux-logger';
import juiceReducer from "./juice/juiceReducer";
import fastFoodReducer from "./fastFood/fastFoodReducer";
import dessertReducer from "./dessert/dessertReducer";

const foodmartRootReducers = combineReducers({
    juice : juiceReducer,
    fastFood : fastFoodReducer,
    dessert : dessertReducer
})

const foodmartStore = createStore(foodmartRootReducers,composeWithDevTools(applyMiddleware(logger)));

export default foodmartStore