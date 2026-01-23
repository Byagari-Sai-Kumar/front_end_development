import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { buy_noodles, buy_fried_rice, buy_chicken } from "../../../redux/food_mart/fastFood/fastFoodActions";
import '../../4FoodmartContainer/style.css';

const FastFoodContainer = () => {
    const fastFoodItems = useSelector(state => state.fastFood);
    const {noOfNoodles, noOfFriedRice, noOfChicken} = fastFoodItems;

    const dispatch = useDispatch();
    
    return(
        <div className="overall-store-container">
            <h2>Welcome to FastFood Store</h2>
            <div className="first-row">
                <div className="first-row-eachitem">
                    <p>Noodles - {noOfNoodles}</p>
                    <button onClick={() => dispatch(buy_noodles())} className="buy-button">Buy Noodles</button>
                </div>
                <div className="first-row-eachitem">
                    <p>Fried Rice - {noOfFriedRice}</p>
                    <button onClick={() => dispatch(buy_fried_rice())} className="buy-button">Buy Fried Rice</button>
                </div>
                <div className="first-row-eachitem">
                    <p>Chicken - {noOfChicken}</p>
                    <button onClick={() => dispatch(buy_chicken())} className="buy-button">Buy Chicken</button>
                </div>
            </div>
        </div>
    )
}

export default FastFoodContainer