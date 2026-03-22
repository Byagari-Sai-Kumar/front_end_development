import React, { Component } from "react";

export const Car = (props) => {
    return(
        <div>
            <h1>This is a {props.brand} car!!</h1>
            {props.children}
        </div>
    );
}

export class Bike extends Component{
    render(){
        return(
            <div>
                <h1>This is a {this.props.brand} bike!!</h1>
                {this.props.children}
            </div>
        )
    }
}