import React from 'react'
import {connect} from 'react-redux'

function Counter(props){
    return(
        <div>
            <h1>Counter App</h1>
            {/* <p>Count is : {props.count}</p> */}
            {JSON.stringify(props.products)}
        </div>
    )
}

function mapStateToProps(state){
    return{
        products:state.counterReducer
    }
}

export default connect(mapStateToProps)(Counter)