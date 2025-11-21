import React,{Component} from "react";

class ConditionalRendering extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAdminLoggedIn : true
        }
    }


    render(){
        //1) if-else condition, use this in render method only because jsx unable to identify if else condition
        // if(this.state.isAdminLoggedIn){
        //     return(
        //         <p>Hello Admin!!</p>
        //     )
        // }else{
        //     return(
        //         <p>Hello Guest!!</p>
        //     )
        // }

        //2) Element variable, store state value in a variable
        // let message;
        // if(this.state.isAdminLoggedIn){
        //     message = <p>Hello Admin</p>
        // }else{
        //     message = <p>Hello Guest</p>
        // }
        // return(
        //     <div>
        //         {message}
        //     </div>
        // )

        //3) Terinary Operator
        return(
            this.state.isAdminLoggedIn ? <p>Hello Admin</p> : <p>Hello Guest</p>
        )

        //4)Short-hand Terinary Operator
        //return(this.state.isAdminLoggedIn && <p>Hello Admin</p>)
    }
}

export default ConditionalRendering;