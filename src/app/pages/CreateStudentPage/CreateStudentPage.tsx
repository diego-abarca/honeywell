import React, { Fragment } from "react";
import {CreateStudentForm, GoBackButton} from "../../components";
import {useHistory} from "react-router-dom";
import { useDispatch} from 'react-redux'
import { createStudentDone } from "../../store/students";
import './CreateStudentPageStyle.scss'

function CreateStudentPage () {
  const history = useHistory()
  const dispatch = useDispatch();
  const onSubmit = (form) => {
    dispatch(createStudentDone(form))
    history.replace('/')
  }

  return (
    <div className='create-student-page'>
      <GoBackButton />
      <CreateStudentForm onSubmit={onSubmit}/>
    </div>
  )
}

export default CreateStudentPage
