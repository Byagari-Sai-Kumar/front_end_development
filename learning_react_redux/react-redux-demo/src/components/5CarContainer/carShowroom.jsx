import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {buyBMW,buyAudi,buyTata} from '../../redux/cars/carActions'

export const CarShowroom = () => {
    const carObject = useSelector(state => state.cars)
    const dispatch = useDispatch();

    console.log('Car component render');
    return(
        <>
            <p>BMW - {carObject.noOfBMW}</p>
            <button onClick={() => dispatch(buyBMW())}>Buy BMW</button>
            <p>Audi - {carObject.noOfAudi}</p>
            <button onClick={() => dispatch(buyAudi())}>Buy Audi</button>
            <p>Tata - {carObject.noOfTata}</p>
            <button onClick={() => dispatch(buyTata())}>Buy Tata</button>
        </>
    )
}