import React,{Component} from "react";

class ComponentB extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn : true
        }
        console.log("Component B constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("Component B getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log('Component B componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('Component B shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Component B getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('Component B componentDidUpdate')
        return null;
    }

    render(){
        console.log('Component B render')
        return(
            <>
                <p>Hello from Component B</p>
            </>
        )
    }
}

export default ComponentB