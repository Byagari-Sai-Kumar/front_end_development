import {BUY_NOODLES, BUY_FRIED_RICE, BUY_CHICKEN } from "./fastFoodConstants";

const initialState = {
    noOfNoodles : 50,
    noOfFriedRice :50,
    noOfChicken :50
}

const fastFoodReducer = (state=initialState,action) => {
    switch(action.type){
        case BUY_NOODLES:
            return {
                ...state,
                noOfNoodles: state.noOfNoodles - 1
            }
        case BUY_FRIED_RICE:
            return{
                ...state,
                noOfFriedRice : state.noOfFriedRice - 1
            }
        case BUY_CHICKEN:
            return{
                ...state,
                noOfChicken : state.noOfChicken - 1
            }
        default:
            return state
    }
}

export default fastFoodReducer