import React, {useState, Fragment} from "react";
import { useHistory } from 'react-router-dom'
// import { useSelector } from '../../store/store.helpers'
import { getStudentListSelector, deleteStudent } from "../../store/students";
import {StudentTable, CreateButton} from "../../components";
import { useDispatch, useSelector } from 'react-redux'
import './StudentListPageStyle.scss'

function StudentListPage() {
  const history = useHistory()
  const dispatch = useDispatch()
  const studentList = useSelector(getStudentListSelector)
  console.log(studentList);

  const onRowClick = (row) => {
    history.push(`/student/${row}` )
  }

  function onRowDelete (row) {
    dispatch(deleteStudent(row))
  }

  return (
    <div className="create-student-list-page">
      <CreateButton />
      <StudentTable students={studentList} onRowClick={onRowClick} onRowDelete={onRowDelete}/>
    </div>
  )
}

export default StudentListPage
