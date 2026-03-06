import { Component } from "react";

type CounterProps = {
    message: string
}

type CounterState = {
    count: number
}

class Counter extends Component<CounterProps,CounterState>{
    state = {
        count : 0
    }

    handleIncreaseCounter = () => {
        this.setState((prevState) => ({count : prevState.count + 1}))
    }

    render(){
        return(
            <div>
                <p>{this.props.message}</p>
                <p>Counter - {this.state.count}</p>
                <button onClick={this.handleIncreaseCounter}>Increase Counter</button>
            </div>
        )
    }
}

export default Counter

//if we dont have props passing then simply use empty {}
//if we dont have any state then simple remove it. here we can remove CounterState