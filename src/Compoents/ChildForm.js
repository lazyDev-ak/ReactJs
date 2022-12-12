import React from 'react'

function ChildForm(props) {
  return (
    <div>
      <table>
        <tbody>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Age</td>
        </tr>
        <tr>
          <td>{props.userInputData.firstName}</td>
          <td>{props.userInputData.lastName}</td>
          <td>{props.userInputData.age}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ChildForm