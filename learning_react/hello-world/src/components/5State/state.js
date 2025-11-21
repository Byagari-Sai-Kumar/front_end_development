import React,{Component} from "react";

class GreetVisitors extends Component{
    constructor(){
        super();
        //create a state here
        this.state = {
            message: 'Welcome visitor'
        }
    }

    onChangeSubscribe(){
        //update the state
        this.setState({
            message: "Thankyou for subscribing!!"
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.onChangeSubscribe()}>Subscribe</button>
            </div>
        )
    }
}

export default GreetVisitors;