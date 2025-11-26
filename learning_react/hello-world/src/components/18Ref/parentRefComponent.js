import React,{Component} from "react";
import ChildRefComponent from './childRefComponent'

class ParentRefComponent extends Component{
    constructor(props){
        super(props)
        this.childRef = React.createRef();
    }

    handleClick = () => {
        this.childRef.current.onFocusInputElement()
    }

    render(){
        return(
            <>
                <ChildRefComponent ref={this.childRef}/>
                <button onClick={this.handleClick}>Focus Input</button>
            </>
        )
    }
}

export default ParentRefComponent