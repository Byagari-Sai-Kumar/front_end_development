import React, {Component} from "react";

export const Purchase = () => {
    function onClickPurchase(){
        console.log('Thanks for shopping!!')
    }

    return(
        <div>
            <h1>Click here to purchase</h1>
            <button onClick={()=>{onClickPurchase()}}>Buy now</button>
            <button onClick={onClickPurchase}>Buy now</button>
        </div>
    )
}

export class PurchaseClass extends Component{
    constructor(){
        super();
        this.state = {
            currentPurchaseStatus : 'Order now'
        }
    }
    onClickPurchaseButton = () => {
        this.setState({
            currentPurchaseStatus : 'Thanks for ordering!!'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.currentPurchaseStatus}</h1>
                <button onClick={this.onClickPurchaseButton}>Click here to purchase</button>
            </div>
        )
    }
}