import React from 'react'
import {connect} from 'react-redux'

function Counter(props){
    return(
        <div>
            <h1>Counter App</h1>
            <p>Count is : {props.count}</p>
        </div>
    )
}

function mapStateToProps(state){
    return{
        count:state.counterReducer
    }
}

export default connect(mapStateToProps)(Counter)