import React from 'react'
import ChildForm from './ChildForm'

function Form() {
  const [capturedData,setCapturedData]= React.useState({});
  const capture = (event) =>{
    setCapturedData({
      firstName: event.target.value,
      lastName: event.target.value
    })
  }
  return (
    <div>
      <div className='mt-2'>
        <input id='firstName' onChange={capture} className='border-2 border-slate-800 ml-2' placeholder='First Name'></input>
        <input id='lastName'onChange={capture} className='border-2 border-slate-800 ml-2' placeholder='Last Name'></input>
      </div>
      <ChildForm capturedData={capturedData} />
    </div>
  )
}

export default Form