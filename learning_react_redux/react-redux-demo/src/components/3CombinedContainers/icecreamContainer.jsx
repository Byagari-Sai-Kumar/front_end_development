import React from "react";
import { connect } from "react-redux";
import {buyIcecream} from '../../redux/icecream/icrecreamActions'

const IcecreamContainerOne = (props) => {
    return(
        <div>
            <h4>Icecream Store</h4>
            <p>No of Icecreams - {props.noOfIcecreams}</p>
            <button onClick={props.buyIcecream}>Buy Icecream</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        noOfIcecreams: state.icecream.noOfIcecreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyIcecream: () => dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IcecreamContainerOne)