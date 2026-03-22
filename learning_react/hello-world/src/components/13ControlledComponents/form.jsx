import React,{Component} from "react";
import './formstyle.css';

//By default input element in html have their own default value 
//But its better practice let react to handle them
class ControlledComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : "",
            comments : "",
            topic: 'react'
        }
    }

    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    
    handleComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSelect = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        alert(`${this.state.username},  ${this.state.comments},  ${this.state.topic}`);
        event.preventDefault();
    }

    render(){
        return(
            <>
                <form className="formStyle" onSubmit={this.handleFormSubmit}>
                    <label>Enter usernmae</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsername}/>

                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleComments}/>

                    <select value={this.state.topic} onChange={this.handleSelect}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>

                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}

export default ControlledComponent;