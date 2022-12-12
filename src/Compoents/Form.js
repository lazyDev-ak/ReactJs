import React from 'react'
import ChildForm from './ChildForm'

function Form() {
  const [userInputData,setUserInputData]= React.useState({
    firstName:"",
    lastName:"",
    age:"",
  });
  const capture = (e) =>{
    setUserInputData({
      ...userInputData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = () => {
    
  }
  console.log(userInputData);
  return (
    <div>
      <div className='mt-2'>
        <input type="text" name='firstName' onChange={capture} placeholder='First Name'></input>
        <input type="text" name='lastName' onChange={capture} placeholder='Last Name'></input>
        <input type="date" name='age' onChange={capture} placeholder='Last Name'></input>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <ChildForm userInputData={userInputData}/>
    </div>
  )
}

export default Form