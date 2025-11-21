import React,{Component} from "react";

export const EventHandlerFunction = () => {
    function onClickBuyNow(){
        console.log('clicked on buy now!!');
    }

    return(
        <div>
            <button onClick={onClickBuyNow}>Click</button>
        </div>
    )
}

export class EventHandler extends Component{
    constructor(){
        super();
        this.state = {
            currentStatus : 'Click here to purchase.'
        }

        //below is the best approach to bind events
        this.onClickPurchaseButton = this.onClickPurchaseButton.bind(this);
    }

    //when you declare a function in this way we need to use bind method in the event handler
    //else we encounter undefined error due to this keyword
    onClickPurchaseButton(){
        this.setState({
            currentStatus : 'Thanks for shopping!!'
        })
    }

    onClickPurchase = () => {
        this.setState({
            currentStatus : 'Thanks for shopping!!'
        })
    }

    //1)Binding in render 
    //2)Arrow function in render
    //3)Binding in constructor
    //4)Using Arrow functions in methods

    render(){
        return(
            <div>
                <h1>{this.state.currentStatus}</h1>
                {/* <button onClick={this.onClickPurchaseButton.bind(this)}>Purchase One</button> */}
                {/* <button onClick={()=>this.onClickPurchaseButton()}>Purchase Two</button>
                <button onClick={this.onClickPurchase}>purchase Three</button> */}
                <button onClick={this.onClickPurchaseButton}>Purchase Four</button>
            </div>
        )
    }
}