const redux = require('redux');
const axios = require('axios');
const thunkMiddleware = require('redux-thunk').thunk;

const initialState = {
    loading: true,
    users:[],
    error:""
}

const FETCH_USERS_LOADING = 'FETCH_USERS_LOADING';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUsersLoading = () => {
    return{
        type:FETCH_USERS_LOADING
    }
}

const fetchUsersSuccess = (users) => {
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

const fetchUsersFailure = (errorMsg) => {
    return{
        type:FETCH_USERS_FAILURE,
        payload:errorMsg
    }
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'FETCH_USERS_LOADING':
            return{
                ...state,
                loading:true
            }
        case 'FETCH_USERS_SUCCESS':
            return{
                loading: false,
                users:action.payload,
                error:""
            }
        case 'FETCH_USERS_FAILURE':
            return{
                loading: false,
                users:[],
                error:action.payload
            }
        default:
            return state
    }
}

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersLoading());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.map(eachUser => eachUser.name);
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const store = createStore(reducer,applyMiddleware(thunkMiddleware));
const unsubscribe = store.subscribe(() => console.log('Updated state: ',store.getState()))
store.dispatch(fetchUsers());