import React, {Component} from "react";

class ErrorBoundaryChildComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasError : false
        }
    }

    static getStaticDerivedFromError(error){
        this.setState({
            hasError : true
        })
    }

    render(){
        if(this.state.hasError){
            return(
                <p>Something went wrong!!</p>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundaryChildComponent