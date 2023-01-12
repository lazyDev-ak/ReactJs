import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {reduceCounter} from './actions'

function ReduceCounter(props){

    return(
        <div>
            <button type="button" onClick={()=>props.dispatch(reduceCounter())}>Reduce</button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(reduceCounter,dispatch)
    }
}

export default connect(mapDispatchToProps)(ReduceCounter)
