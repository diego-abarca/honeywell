import React, {useState} from "react";
import './CreateStudentFormStyle.scss'

function CreateStudentForm ({onSubmit}) {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [gpa, setGpa] = useState('')
  const [phone, setPhone] = useState('')

  const onFormSubmit = (ev) => {
    ev.preventDefault();
    onSubmit({
      firstName,
      lastName,
      address,
      city,
      gpa,
      phone
    });
  }

  return (
    <form onSubmit={onFormSubmit} className='create-student-form'>
      <Field title="First Name" name='firstName' value={firstName} onChange={setFirstName}/>
      <Field title="Last Name" name='lastName' value ={lastName} onChange={setLastName}/>
      <Field title="Street Number/Name" name='address' value={address} onChange={setAddress}/>
      <Field title="City" name='city' value={city} onChange={setCity}/>
      <Field title="Phone" name='city' value={phone} onChange={setPhone}/>
      <Field title="GPA" name='phone' value={gpa} onChange={setGpa}/>
      <button type="submit"> Submit </button>
    </form>
  )
}

function Field ({title, name, value, onChange}) {
  return (
    <div className='field-row'>
      <label> {title}</label>
      <input name={name} type='text' value={value} onChange={ev => onChange(ev.target.value)}/>
    </div>
  )
}

export default CreateStudentForm
