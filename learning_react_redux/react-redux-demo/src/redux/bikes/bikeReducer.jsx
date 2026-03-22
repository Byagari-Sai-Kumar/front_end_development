import {BUY_HONDA,BUY_KTM,BUY_ROYAL_ENFEILD} from './bikeConstants'

const initialBikeState = {
    noOfHonda: 100,
    noOfKtm: 70,
    noOfRoyalEnfeild: 20
}

export const bikeReducer = (state=initialBikeState,action) => {
    switch(action.type){
        case BUY_HONDA:
            return{
                ...state,
                noOfHonda: state.noOfHonda - 1
            }
        case BUY_KTM:
            return{
                ...state,
                noOfKtm: state.noOfKtm - 1
            }
        case BUY_ROYAL_ENFEILD:
            return{
                ...state,
                noOfRoyalEnfeild: state.noOfRoyalEnfeild - 1
            }
        default:
            return state
    }
}   