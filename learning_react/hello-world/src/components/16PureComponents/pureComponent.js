import React, {PureComponent} from "react";

class PureComponentA extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            name: 'sai kumar'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({name: 'sai kumar'})
        }, 2000)

        setInterval(() => {
            this.setState({name: 'suresh'})
        }, 5000)
    }

    render(){
        console.log('Pure component')
        return(
            <p>Hello from pure component</p>
        )
    }
}

export default PureComponentA