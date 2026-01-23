import { BUY_NOODLES, BUY_FRIED_RICE, BUY_CHICKEN } from "./fastFoodConstants";

export function buy_noodles(){
    return{
        type: BUY_NOODLES
    }
}

export function buy_fried_rice(){
    return{
        type: BUY_FRIED_RICE
    }
}

export function buy_chicken(){
    return{
        type: BUY_CHICKEN
    }
}