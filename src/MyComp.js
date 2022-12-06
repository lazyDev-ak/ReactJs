import React from "react"
import MyComp1 from "./MyComp1"

function MyComp(){
   // let firstName=""

    const[firstName,setFirstName]=React.useState('')

    const handleChange=(event)=>{
      //  console.log(event.target.value);
      //  firstName=event.target.value
       setFirstName(event.target.value)
       // console.log(firstName);
    }
    
    return(
        <div>
            <h1>My Comp!!!</h1>
            <input type='text' onChange={handleChange}/>
            <p> Firstname : {firstName}</p>
        </div>
    )
}

// class MyComp extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>MyComp</h1>
//                 <MyComp1/>
//             </div>
//         )
//     }
// }

export default MyComp 