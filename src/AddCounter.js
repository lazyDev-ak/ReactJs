import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {addCounter} from './actions'

function AddCounter(props){

    const products=[{
        id:1,
        name:"Mobile"
    },{
        id:2,
        name:"Laptop"
    }]
    
    return(
        <div>
            <ul>
                {
                    products.map((product)=>(
                        <div>
                            <li>{product.name}</li>
                            <button type='button' onClick={()=>props.dispatch(addCounter(product))}>Add To Cart</button>
                        </div>
                    ))
                }
            </ul>
            {/* <button type="button" onClick={()=>props.dispatch(addCounter())}>Add</button> */}
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(addCounter,dispatch)
    }
}

export default connect(mapDispatchToProps)(AddCounter)
