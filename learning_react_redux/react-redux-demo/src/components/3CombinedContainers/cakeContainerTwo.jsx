import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../../redux/cakes/cakeActions";

const CakeContainerTwoTwo = () => {
    const noOfCakes = useSelector(state => state.cakes.noOfCakes)
    const dispatch = useDispatch();
    return(
        <div>
            <h2>useSelector & useDispatch Hooks</h2>
            <h3>No of Cakes - {noOfCakes}</h3>
            <button onClick={() => {dispatch(buyCake())}}>Buy cake</button>
        </div>
    )
}

export default CakeContainerTwoTwo

//useSelector from react-redux acts similar to the mapStateToProps
//it accepts a state function and returns state object
//instead of mapping to props we can directly use store the state value in a variables and use them

//useDispatch from react-redux will provide the reference to the dispatch method in the store.
//import actions and use them.