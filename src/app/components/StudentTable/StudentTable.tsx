import React from "react";
import './StudentTableStyle.scss'

function StudentTable ({students, onRowClick, onRowDelete}:any) {
  return (
    <table className="student-table">
      <thead>
      <tr>
        <th>
          First Name
        </th>
        <th>
          Last Name
        </th>
        <th>
          Address
        </th>
        <th>
          City
        </th>
        <th>
          Phone Number
        </th>
        <th>
          GPA
        </th>
        <th>
          Delete
        </th>
      </tr>
      </thead>
      <tbody>
      {students.map(({id, firstName, lastName, address, city, phone, gpa }) => (
        <tr onClick={() => onRowClick(id)}>
          <td>
            {firstName}
          </td>
          <td>
            {lastName}
          </td>
          <td>
            {address}
          </td>
          <td>
            {city}
          </td>
          <td>
            {phone}
          </td>
          <td>
            {gpa}
          </td>
          <td className='center-close'>
            <span onClick={(ev) => {ev.stopPropagation(); onRowDelete(id);}}>
              &#x274C;
            </span>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default StudentTable
