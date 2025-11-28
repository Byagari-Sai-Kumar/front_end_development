import React from "react";

const withCounter = (WrapperComponent,incrementNumber) => {
    class EnhancedComponent extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                count : 0
            }
        }

        incrementCount = () => {
            this.setState((prevState) => {
                return {count : prevState.count + incrementNumber}
            })
        }

        render(){
            return(
                <WrapperComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props}/>
            )
        }
    }
    return EnhancedComponent;
}

export default withCounter