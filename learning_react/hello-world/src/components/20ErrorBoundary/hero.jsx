import React from "react";

export const Hero = (props) => {
    const {hero} = props;
    if(hero === 'Joker'){
        throw new Error(
            'Not a hero!'
        )
    }
    return(
        <p>{hero}</p>
    )
}