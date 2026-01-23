import { BUY_APPLE_JUICE, BUY_MANGO_JUICE, BUY_ORANGE_JUICE } from "./juiceConstants";

export function buy_apple_juice(appleJuiceCount){
    return{
        type: BUY_APPLE_JUICE,
        payload : appleJuiceCount
    }
}

export function buy_mango_juice(){
    return{
        type: BUY_MANGO_JUICE
    }
}

export function buy_orange_juice(){
    return{
        type: BUY_ORANGE_JUICE
    }
}