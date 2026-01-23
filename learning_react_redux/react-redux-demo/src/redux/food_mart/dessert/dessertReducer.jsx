import { BUY_GULAB_JAMUN, BUY_PIPEAPPLE_CAKE, BUY_ICECREAM } from "./dessertConstants";

const initialState = {
    noOfGulabJamun : 100,
    noOfPineappleCake :100,
    noOfIcecream :100
}

const dessertReducer = (state=initialState,action) => {
    switch(action.type){
        case BUY_GULAB_JAMUN:
            return {
                ...state,
                noOfGulabJamun: state.noOfGulabJamun - 1
            }
        case BUY_PIPEAPPLE_CAKE:
            return{
                ...state,
                noOfPineappleCake : state.noOfPineappleCake - 1
            }
        case BUY_ICECREAM:
            return{
                ...state,
                noOfIcecream : state.noOfIcecream - 1
            }
        default:
            return state
    }
}

export default dessertReducer