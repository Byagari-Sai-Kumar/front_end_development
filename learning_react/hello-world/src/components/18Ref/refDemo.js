import React, {Component} from "react";

class RefDemoComponent extends Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef();
    }

    componentDidMount(){
        this.inputRef.current.focus();
    }

    handleClick = () => {
        //here we are accessing the dom node of input element
        alert(this.inputRef.current.value)
    }

    render(){
        return(
            <>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.handleClick}>Click here</button>
            </>
        )
    }
}

export default RefDemoComponent