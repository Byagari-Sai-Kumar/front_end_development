import React from 'react'
import {GreetOne} from './GreetOne'

export const GreetTwo = (props: React.ComponentProps<typeof GreetOne>) => {
    return(
        <div>
            <p>Hello I'm {props.name} and I'm from {props.city  }</p>
        </div>
    )
}