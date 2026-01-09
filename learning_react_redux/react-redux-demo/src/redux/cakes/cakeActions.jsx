import { BUY_CAKE } from "./cakeConstants";

export const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

//buyCake is an action creator which returns an action object that contains type property with some constant value.