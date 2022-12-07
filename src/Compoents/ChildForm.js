import React from 'react'

function ChildForm(props) {
  return (
    <div>
        <table className=' ml-2 mt-2 border-slate-600'>
            <th>
                <td className='border-2 border-slate-600 p-2 w-4'>FirstName</td>
                <td className='border-2 border-slate-600 p-2 w-4'>LastName</td>
            </th>
            <tr>
                <td className='border-2 border-slate-600 p-2 w-4'>{props.capturedData.firstName}</td>
                <td className='border-2 border-slate-600 p-2 w-4'>{props.capturedData.lastName}</td>
            </tr>
        </table>
    </div>
  )
}

export default ChildForm