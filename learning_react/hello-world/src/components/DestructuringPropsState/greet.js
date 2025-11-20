import React,{Component} from "react";

export const GreetPeople = (props) =>{
    const {name,city} = props;
    return(
        <h1>Hello I'm {name}, and im from {city}</h1>
    )
}

export class GreetPeopleClass extends Component{
    render(){
        //always use props destructuring of class component inside render method
        const {name,city} = this.props;
        return(
            <h1>Hello {name}, Im from {city}</h1>
        )
    }
}