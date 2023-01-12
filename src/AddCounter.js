import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {addCounter} from './actions'

function AddCounter(props){

    return(
        <div>
            <button type="button" onClick={()=>props.dispatch(addCounter())}>Add</button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(addCounter,dispatch)
    }
}

export default connect(mapDispatchToProps)(AddCounter)
