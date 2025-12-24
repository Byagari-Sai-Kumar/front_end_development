const redux = require('redux');
const axios = require('axios');
const thunkMiddleware = require('redux-thunk').thunk;

const initialState = {
    loading: true,
    comments:[],
    error:""
}

const FETCH_USER_COMMENTS_LOADING = 'FETCH_USER_COMMENTS_LOADING';
const FETCH_USER_COMMENTS_SUCCESS = 'FETCH_USER_COMMENTS_SUCCESS';
const FETCH_USER_COMMENTS_FAILURE = 'FETCH_USER_COMMENTS_FAILURE';

const fetchUserCommentsLoading = () => {
    return{
        type:FETCH_USER_COMMENTS_LOADING
    }
}

const fetchUserCommentsSuccess = (comments) => {
    return{
        type:FETCH_USER_COMMENTS_SUCCESS,
        payload:comments
    }
}

const fetchUserCommentsFailure = (errorMsg) => {
    return{
        type:FETCH_USER_COMMENTS_FAILURE,
        payload:errorMsg
    }
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case 'FETCH_USER_COMMENTS_LOADING':
            return{
                ...state,
                loading:true
            }
        case 'FETCH_USER_COMMENTS_SUCCESS':
            return{
                ...state,
                loading:false,
                comments:action.payload,
                error:""
            }
        case 'FETCH_USER_COMMENTS_FAILURE':
            return{
                ...state,
                loading:false,
                comments:[],
                error:action.payload
            }
        default:
            return state;
    }
}

const fetchUsersComments = () => {
    return function(dispatch){
        dispatch(fetchUserCommentsLoading());
        axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(response => {
                const comments = response.data.map(eachComment => eachComment.body);
                dispatch(fetchUserCommentsSuccess(comments));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchUserCommentsFailure(errorMsg))
            })
    }
}

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const store = createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(() => console.log('Updated state : ',store.getState()));
store.dispatch(fetchUsersComments())