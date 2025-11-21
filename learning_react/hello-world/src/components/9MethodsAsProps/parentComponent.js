import React, { Component } from "react";
import {ChildComponent} from './childComponent'

class ParentComponent extends Component{
    constructor(){
        super();
        this.state = {
            name : 'I"m parent..'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    //1) Define method and bind in constructor
    //2) pass method as props to the child component
    //3) access method in child component but use arrow function to pass values from child to parent
    greetParent(name){
        alert(`Hello from parent and said by ${name}`);
    }

    render(){
        return(
            <>
                <ChildComponent greetHandler={this.greetParent}/>
            </>
        )
    }
}

export default ParentComponent;