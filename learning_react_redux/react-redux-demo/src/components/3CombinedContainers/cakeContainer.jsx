import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../../redux/cakes/cakeActions";

const CakeContainerOne = (props) => {
    return(
        <div>
            <h2>No of cakes - {props.noOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        noOfCakes: state.cakes.noOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainerOne)