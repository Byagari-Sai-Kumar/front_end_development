import React,{Component} from "react";
import ReactMemoComponent from '../17ReactMemo/reactMemoComponent';

class RegularComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'sai kumar'
        }
    }

    componentDidMount(){
        // setInterval(() => {
        //     this.setState({name: 'sai kumar'})
        // }, 2000)
    }

    render(){
        //console.log("Regular component")
        return(
            <>
                <p>Hello from Regular component</p>
                <ReactMemoComponent name={this.state.name}/>
            </>
        )
    }
}

export default RegularComponent