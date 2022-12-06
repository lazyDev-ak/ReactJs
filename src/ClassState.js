import React from 'react'

class ClassState extends React.Component{

    constructor(){
        this.state={
            number:0
        }
    }

    render(){
        return(
            <div>
                <h1>State Demo</h1>
                <p>Number is : {this.state.number}</p>
            </div>
        )
    }
}

export default ClassState