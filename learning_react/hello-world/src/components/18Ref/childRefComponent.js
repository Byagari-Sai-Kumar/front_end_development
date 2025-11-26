import React, {Component} from "react";

class ChildRefComponent extends Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef();
    }

    onFocusInputElement(){
        this.inputRef.current.focus();
    }

    render(){
        return(
            <input type="text" ref={this.inputRef}/>
        )
    }
}

export default ChildRefComponent