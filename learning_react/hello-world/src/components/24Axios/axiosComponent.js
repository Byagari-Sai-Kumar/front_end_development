import React, {Component} from "react";
import axios from 'axios';

class AxiosComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            posts : [],
            errorMsg : ""
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({posts : response.data})
            })
            .catch(error => {
                this.setState({errorMsg : "Error while fetching data"})
            })
    }

    render(){
        const posts = this.state.posts;
        return(
            <>
                <ul>
                    List of Posts
                    {posts.length ? 
                        posts.map(eachPost => 
                                <li key={eachPost.id}>{eachPost.name}</li>
                            )
                    : null}
                </ul>
                <p>{this.state.errorMsg}</p>
            </>
        )
    }
}

export default AxiosComponent