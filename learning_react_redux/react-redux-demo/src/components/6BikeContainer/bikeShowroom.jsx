import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {buyHonda,buyKtm,buyRoyalEnfeild} from '../../redux/bikes/bikeActions'

export const BikeShowroom = () => {
    const {noOfHonda,noOfKtm,noOfRoyalEnfeild} = useSelector(state => state.bikes);
    const dispatch = useDispatch();

    console.log('bike component render');
    return(
        <>
            <p>Honda - {noOfHonda}</p>
            <button onClick={() => dispatch(buyHonda())}>Buy Honda</button>
            <p>KTM - {noOfKtm}</p>
            <button onClick={() => dispatch(buyKtm())}>Buy KTM</button>
            <p>Royal Enfeild - {noOfRoyalEnfeild}</p>
            <button onClick={() => dispatch(buyRoyalEnfeild())}>Buy Royal Enfeild</button>
        </>
    )
}