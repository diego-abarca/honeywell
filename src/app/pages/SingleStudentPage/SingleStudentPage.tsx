import React, {useEffect, Fragment} from "react";
import {
  useParams
} from "react-router-dom";
import { useDispatch } from 'react-redux'
import {getStudentSelectedObjectSelector, setSelectedStudent} from "../../store/students";
import {useSelector} from "../../store/store.helpers";
import {ProfilePicture, StudentData, GoBackButton} from "../../components";
import './SingleStudentPageStyle.scss'

function SingleStudentPage () {

  const dispatch = useDispatch()
  const  { id } = useParams();

  const selectedStudent = useSelector(getStudentSelectedObjectSelector)

  useEffect(() => {
    dispatch(setSelectedStudent(id))
  }, [])

  return (
    <div className='single-student-page'>
      <GoBackButton />
      {selectedStudent && (
        <div className="selected-student-page">
          <ProfilePicture image={selectedStudent.image}/>
          <StudentData row={selectedStudent}/>
        </div>
      )}
    </div>
  )
}

export default SingleStudentPage
