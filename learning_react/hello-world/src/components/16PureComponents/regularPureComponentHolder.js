import React, { Component } from "react";
import RegularComponent from "./regularComponent";
import PureComponentA from "./pureComponent";

class RegularPureComponentHolder extends Component{
    render(){
        console.log("******** Parent Component *********")
        return(
            <div>
                <p>This is parent component</p>
                <RegularComponent/>
                <PureComponentA/>
            </div>
        )
    }
}

export default RegularPureComponentHolder