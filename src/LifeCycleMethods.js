import React from 'react'

class LifeCycleMethods extends React.Component{

    constructor(){
        super()
        this.state={
            number:0
        }
    }
    componentDidMount(){
        console.log('Component Did Mount : '+this.state.number);
    }
    componentDidUpdate(){
        console.log('Component Did Update : '+this.state.number);
    }

    increment=()=>{
        this.setState({number:this.state.number+1})
    }

    render(){
        return(
            <div>
                <h1>Life Cycle Methods!!!</h1>
                <p>Number is: {this.state.number}</p>
                <button onClick={this.increment}>Add</button>
            </div>
        )
    }

}

export default LifeCycleMethods