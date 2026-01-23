import { BUY_ICECREAM } from "./icrecreamConstant";

const icecreamInitialState = {
    noOfIcecreams : 10
}

export const icecreamReducer = (state=icecreamInitialState,action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                noOfIcecreams : state.noOfIcecreams - 1
            }
        default:
            return state
    }
}