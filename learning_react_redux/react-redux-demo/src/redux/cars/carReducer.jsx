import {BUY_BMW,BUY_AUDI,BUY_TATA} from './carConstants'

const initialCarState = {
    noOfBMW: 10,
    noOfAudi: 30,
    noOfTata: 50
}

export const carReducer = (state=initialCarState,action) => {
    switch(action.type){
        case BUY_BMW:
            return{
                ...state,
                noOfBMW: state.noOfBMW - 1
            }
        case BUY_AUDI:
            return{
                ...state,
                noOfAudi: state.noOfAudi - 1
            }
        case BUY_TATA:
            return{
                ...state,
                noOfTata: state.noOfTata - 1
            }
        default:
            return state
    }
}