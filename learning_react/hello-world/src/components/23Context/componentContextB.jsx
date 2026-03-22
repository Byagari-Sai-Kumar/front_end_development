import React, {Component} from "react";
import { ComponentContextC } from "./componentContextC";
import UserContext from "./userContext";

class ComponentContextB extends Component{
    render(){
        return(
            <>
                <p>Hello from ComponentContext B</p>
                <ComponentContextC/>
                <p>{this.context}</p>
            </>
        )
    }
}

ComponentContextB.contextType = UserContext;

export default ComponentContextB;