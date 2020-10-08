import React, { Fragment } from "react";
import './StudentDataStyle.scss'

function StudentData ({row: {firstName, lastName, address, city, phone, gpa}}) {
  return (
    <div className="student-data">
      <StudentDataRow rowName="First Name" value={firstName}/>
      <StudentDataRow rowName="Last Name" value={lastName}/>
      <StudentDataRow rowName="Address" value={address}/>
      <StudentDataRow rowName="City" value={city}/>
      <StudentDataRow rowName="Phone" value={phone}/>
      <StudentDataRow rowName="GPA" value={gpa}/>
    </div>
  )
}

function StudentDataRow ({rowName, value}) {
  return (
    <Fragment>
      <div className='row-name'>
        {rowName}
      </div>
      <div className='row-value'>
        {value}
      </div>
    </Fragment>
  )
}

export default StudentData
