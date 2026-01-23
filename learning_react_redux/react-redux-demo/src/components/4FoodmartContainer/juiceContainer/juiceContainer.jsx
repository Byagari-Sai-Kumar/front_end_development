import React from "react";
import { connect } from "react-redux";
import { buy_apple_juice,buy_mango_juice,buy_orange_juice } from "../../../redux/food_mart/juice/juiceActions";
import '../../4FoodmartContainer/style.css'

const JuiceContainer = (props) => {
    const {noOfApple, noOfMango, noOfOrange} = props;
    const {buyAppleJuice,buyMangoJuice,buyOrangeJuice} = props;
    return(
        <div className="overall-store-container">
            <h2>Welcome to Juice Store</h2>
            <div className="first-row">
                <div className="first-row-eachitem">
                    <p>Apple Juice - {noOfApple}</p>
                    <button onClick={buyAppleJuice} className="buy-button">Buy Apple Juice</button>
                </div>
                <div className="first-row-eachitem">
                    <p>Mango Juice - {noOfMango}</p>
                    <button onClick={buyMangoJuice} className="buy-button">Buy Mango Juice</button>
                </div>
                <div className="first-row-eachitem">
                    <p>Orange Juice - {noOfOrange}</p>
                    <button onClick={buyOrangeJuice} className="buy-button">Buy Orange Juice</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        noOfApple: state.juice.noOfAppleJuice,
        noOfMango: state.juice.noOfMangoJuice,
        noOfOrange: state.juice.noOfOrangeJuice
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyAppleJuice : () => dispatch(buy_apple_juice()),
        buyMangoJuice : () => dispatch(buy_mango_juice()),
        buyOrangeJuice : () => dispatch(buy_orange_juice())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(JuiceContainer)