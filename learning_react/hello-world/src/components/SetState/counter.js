import React, {Component} from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    increaseCount(){
        //Always use setState to update state so that always render method recalls to update the UI
        //setState accepts two parameters, first is to update state and second is to call back;
        //whenever some code has to executed after the setState do not write it after setState instead
        //write it as a second parameter in a callback function
        this.setState({
            count : this.state.count + 1
        },()=>{console.log(`current count is ${this.state.count}`)})
    }

    render(){
        return(
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={()=>this.increaseCount()}>Increment</button>
            </div>
        );
    }
}

export default Counter;