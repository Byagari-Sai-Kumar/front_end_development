import { BUY_APPLE_JUICE, BUY_MANGO_JUICE, BUY_ORANGE_JUICE } from "./juiceConstants";

const initialState = {
    noOfAppleJuice : 10,
    noOfMangoJuice :10,
    noOfOrangeJuice :10
}

const juiceReducer = (state=initialState,action) => {
    switch(action.type){
        case BUY_APPLE_JUICE:
            return {
                ...state,
                noOfAppleJuice: state.noOfAppleJuice - 1
            }
        case BUY_MANGO_JUICE:
            return{
                ...state,
                noOfMangoJuice : state.noOfMangoJuice - 1
            }
        case BUY_ORANGE_JUICE:
            return{
                ...state,
                noOfOrangeJuice : state.noOfOrangeJuice - 1
            }
        default:
            return state
    }
}

export default juiceReducer