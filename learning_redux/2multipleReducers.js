const redux = require('redux');

const initialState = {
    apple:10,
    mango:20,
    orange:30
}

const BUY_APPLE = 'BUY_APPLE';
const BUY_MANGO = 'BUY_MANGO';
const BUY_ORANGE = 'BUY_ORANGE';

function buyApple(){
    return{
        type:BUY_APPLE
    }
}

function buyMango(){
    return{
        type:BUY_MANGO
    }
}

function buyOrange(){
    return{
        type:BUY_ORANGE
    }
}

const reducer = (prevState = initialState,action) => {
    switch(action.type){
        case 'BUY_APPLE':
            return{
                ...prevState,
                apple : prevState.apple - 1
            }
        case 'BUY_MANGO':
            return{
                ...prevState,
                mango: prevState.mango - 1
            }
        case 'BUY_ORANGE':
            return{
                ...prevState,
                orange: prevState.orange - 1
            }
        default:
            return prevState
    }
}

const createStore = redux.createStore;
const store = createStore(reducer);
console.log('Initial state :',store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state :',store.getState()));
store.dispatch(buyApple());
store.dispatch(buyMango());
store.dispatch(buyOrange());
store.dispatch(buyApple());
unsubscribe();