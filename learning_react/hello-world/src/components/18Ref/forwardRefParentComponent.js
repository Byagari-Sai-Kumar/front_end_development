import React,{Component} from "react";
import {ForwardRefChildComponent} from './forwardRefChildComponent'

class ForwardRefParentComponent extends Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef();
    }

    handleClick = () => {
        this.inputRef.current.focus();
    }

    render(){
        return(
            <>
                <ForwardRefChildComponent ref={this.inputRef}/>
                <button onClick={this.handleClick}>Focus input</button>
            </>
        )
    }
}

export default ForwardRefParentComponent