import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buy_gulab_jamun,buy_pineapple_cake, buy_icecream } from "../../../redux/food_mart/dessert/dessertActions";
import '../../4FoodmartContainer/style.css'

const DessertContainer = () => {
    const dessertItems = useSelector(state => state.dessert);
    const {noOfGulabJamun,noOfPineappleCake,noOfIcecream} = dessertItems;

    const dispatch = useDispatch();

    return(
        <div className="overall-store-container">
            <h2>Welcome to Dessert Store</h2>
            <div className="first-row">
                <div className="first-row-eachitem">
                    <p>Gulab Jamun - {noOfGulabJamun}</p>
                    <button onClick={() => dispatch(buy_gulab_jamun())} className="buy-button">Buy Gulab Jamun</button>
                </div>
                <div className="first-row-eachitem">
                    <p>Pineapple Cake - {noOfPineappleCake}</p>
                    <button onClick={() => dispatch(buy_pineapple_cake())} className="buy-button">Buy Pineapple Cake</button>
                </div>
                <div className="first-row-eachitem">
                    <p>Icecream - {noOfIcecream}</p>
                    <button onClick={() => dispatch(buy_icecream())} className="buy-button">Buy Icecream</button>
                </div>
            </div>
        </div>
    )
}

export default DessertContainer