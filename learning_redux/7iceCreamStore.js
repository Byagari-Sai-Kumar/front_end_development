const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    vanilaIcecream: 10,
    mangoIcecream: 30,
    chocolateIcecream: 50
}

const BUY_VANILAICECREAM = "buy_vanila_icecream";
const BUY_MANGOICECREAM = "buy_mango_icecream";
const BUY_CHOCOLATEICECREAM = "buy_chocolate_icecream";

const buyVanilaIcecream = () => {
    return{
        type: BUY_VANILAICECREAM
    }
} 

const buyMangoIcecream = () => {
    return{
        type: BUY_MANGOICECREAM
    }
} 

const buyChocolateIcecream = () => {
    return{
        type: BUY_CHOCOLATEICECREAM
    }
} 

const reducer = (state=initialState,action) => {
    switch(action.type){
        case BUY_VANILAICECREAM:
            return(
                {
                    ...state,
                    vanilaIcecream: state.vanilaIcecream - 1
                }
            )
            break;
        case BUY_MANGOICECREAM:
            return(
                {
                    ...state,
                    mangoIcecream: state.mangoIcecream - 1
                }
            )
            break;
        case BUY_CHOCOLATEICECREAM:
            return(
                {
                    ...state,
                    chocolateIcecream: state.chocolateIcecream - 1
                }
            )
            break;
        default:
            return state
    }
}

const store = createStore(reducer);
console.log(store.getState());
store.dispatch(buyVanilaIcecream());
console.log(store.getState());
store.dispatch(buyMangoIcecream());
console.log(store.getState());
store.dispatch(buyChocolateIcecream());
console.log(store.getState());