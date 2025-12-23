const redux = require('redux');

const cakeInitialState = {
    cakes:10
}

const icecreamInitialState = {
    icecreams:30
}

const cooldrinkInitialState = {
    cooldrinks:50
}

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';
const BUY_COOLDRINK = 'BUY_COOLDRINK';

function buyCake(){
    return{
        type: BUY_CAKE
    }
}

function buyIcecream(){
    return{
        type: BUY_ICECREAM
    }
}

function buyCooldrink(){
    return{
        type: BUY_COOLDRINK
    }
}

const cakeReducer = (prevState = cakeInitialState,action) => {
    switch(action.type){
        case 'BUY_CAKE':
            return{
                ...prevState,
                cakes: prevState.cakes - 1
            }
        default:
            return prevState;
    }
}

const icecreamReducer = (prevState=icecreamInitialState,action) => {
    switch(action.type){
        case 'BUY_ICECREAM':
            return{
                ...prevState,
                icecreams: prevState.icecreams - 1
            }
        default:
            return prevState
    }
}

const cooldrinksReducer = (prevState=cooldrinkInitialState,action) => {
    switch(action.type){
        case 'BUY_COOLDRINK':
            return{
                ...prevState,
                cooldrinks: prevState.cooldrinks - 1
            }
        default:
            return prevState
    }
}

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const rootReducers = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    cooldrink: cooldrinksReducer
})
const store = createStore(rootReducers);
console.log('Initial state :',store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state :',store.getState()))
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyCooldrink());
unsubscribe();