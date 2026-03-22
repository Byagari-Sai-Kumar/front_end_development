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

    increaseCountFive(){
        //instead of directly passing state object as first arguement try passing it has a function 
        //so that it uses prevState and update accordingly.
        this.setState((prevState) => ({
            count: prevState.count + 5
        }))
    }

    increaseUsingHelpCounter(){
        this.setState((prevState,props)=>({
            count: prevState + props.helpValue
        }))
    }

    render(){
        return(
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={()=>this.increaseCount()}>Increment</button>
                <button onClick={()=>this.increaseCountFive()}>Increase Five</button>
                <button onClick={()=>this.increaseUsingHelpCounter()}>Use Help Counter</button>
            </div>
        );
    }
}

export default Counter;