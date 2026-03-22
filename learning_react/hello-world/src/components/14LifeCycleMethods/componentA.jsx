//In a class component there are four life cycle methods

//1) Mounting
//In component mounting where an instance of class is been creating and inserted into DOM
//constructor
//static getDerivedStateFromProps
//render
//componentDidMount

//2) Updating
//At this phase the component's render will be called due to updation in its props or state
//static getDerivedStateFromProps
//shouldComponentUpdate
//render
//getSnapshotBeforeUpdate
//componentDidUpdate

//3) Unmounting
//This is the phase where component will leave the DOM
//componentWillUnmount

//4) Error Handling
//In any of the above three phases if something goes wrongs while rendering the component
//static getDerivedStateFromError
//componentDidCatch




//Mounting 
//Constructor(props)
//1) A special function that will get called whenever a new instance of a class is been created
//2) Initialize state and bind events
//3) Do not make any side effects eg: http requests here
//4) super(props) and directly overwrite state

//static getDerivedStateFromProps(props,state)
//1) When the state of the component is depend on the changes in props overtime.
//2) cannot use this keyword due to static method. so return the state or null and use it
//3) Do not make any side effects

//render()
//1) Only required method
//2) Do not update state here just consume props/state and return jsx
//3) child components life cycle methods are also executed here

//componentDidMount()
//1) this method is called only once when the component and its child components have been 
// rendered to the dom
//2) Best place to make side effects: http requests




//Updating
//static getDerivedStateFromProps(props,state)
//1) Received props and state and return the state or null
//2) return state or null
//3) Do not make any side effects

//shouldComponentUpdate(nextProps,nextState)
//1) Dictates if component should re-render or not
//2) Performance optimization
//3) Do not cause side effects

//render()
//1) Consume props and state and re-render the component

//getSnapshotBeforeUpdate(prevProps,prevState)
//1) Called right before the changes from the virtual DOM are to be reflected in the actual DOM
//2) Capture some information from the DOM
//3) Return a value or null and returned value is been passed as a thid parameter to the next method

//componentDidUpdate(prevProps,prevState,snapshot)
//1) Called after the render is finished in the re-render cycles 
//2) Compare the current state and prev state and then re-render
//3) Can make side effects http request




//componentWillUnmount()
//1) This method is invoked immediately before the component leaves the DOM
//2) Cancelling any request, removing event handlers, cancelling any subscription and also invalidating timers
//3) Do not update state here




//error handling phase
//static getDerivedStateFromError(error)
//componentDidCatch(error,info)
//When there is an error during rendering, in a life cycle method or in a constructor of any child component


import React,{Component} from "react";
import ComponentB from "./componentB";

class ComponentA extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn : false
        }
        //console.log("Component A constructor")
    }

    static getDerivedStateFromProps(props,state){
        //console.log("Component A getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        //console.log('Component A componentDidMount')
    }

    shouldComponentUpdate(){
        //console.log('Component A shouldComponentUpdate')
        return null
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        //console.log('Component A getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        //console.log('Component A componentDidUpdate')
        return true;
    }

    handleButtonClick = () => {
        this.setState({
            isLoggedIn : true
        })
    }

    render(){
        //console.log('Component A render')
        return(
            <>
                <button onClick={this.handleButtonClick}>Change State</button>
                <p>Hello from Component A</p>
                <ComponentB/>
            </>
        )
    }
}

export default ComponentA