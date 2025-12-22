const redux = require('redux');
const createStore = redux.createStore();


//Action

//Action is an object that has type property and all the information about the state updation

const BUY_CAKE = 'BUY_CAKE';

{
    type : BUY_CAKE
}

//Action creator is a function that return an action

function buyCake(){
    return{
        type : BUY_CAKE
    }
}

//Reducer

//Action only tells what to do. Updating the state based on action is what reducers do.
//Reducers accept two parameters. prevState,action and return newState

const initialState = {
    noOfCake:10
}

const reducer = (prevState = initialState,action) => {
    switch(action.type){
        case 'BUY_CAKE':
            return{
                ...prevState,
                noOfCake : prevState.noOfCake - 1
            }
        default:
            return prevState
    }
}

//here reducers dont update prevState, they always return newState

//Store
//One store for the entire application

//1. Hols the application state
//2. Allows access to the state via getState()
//3. Allows state to update via dispatch(action)
//4. Register listeners via subscribe(listener)
//5. Unregister listeners via function return by the subscribe(listener)

const store = createStore(reducer)