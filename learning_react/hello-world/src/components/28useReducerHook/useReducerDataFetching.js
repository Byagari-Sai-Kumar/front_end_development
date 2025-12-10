import React, {useEffect,useReducer} from "react";
import axios from "axios";

const initialState = {
    loading : true,
    success : {},
    error : ''
}

const reducer = (currentState,action) => {
    switch(action.type){
        case 'FETCHING_LOADING':
            return {
                loading : true,
                success : {},
                error : ''
            }
        case 'FETCHING_SUCCESS':
            return {
                loading : false,
                success : action.value,
                error : ''
            }
        case 'FETCHING_ERROR':
            return {
                loading : false,
                success : {},
                error : 'Something went wrong!'
            }
        default:
            return currentState;
    }
}

export const UseReducerDataFetching = () => {
    const [postState,dispatchPost] =  useReducer(reducer,initialState);

    useEffect(() => {
        dispatchPost({type : 'FETCHING_LOADING'});
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => {
                dispatchPost({type : "FETCHING_SUCCESS", value : res.data})
            })
            .catch(err => {
                dispatchPost({type : 'FETCHING_ERROR'})
            })
    },[]);

    return(
        <>
            <p>{postState.loading ? 'Loading' : postState.success.title}</p>
            {postState.error && <p>{postState.error}</p>}
        </>
    )
}