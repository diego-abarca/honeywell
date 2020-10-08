
export const CREATE_STUDENT_DONE= 'CREATE_STUDENT_DONE';
export const createStudentDone = (student:any) => ({
  type: CREATE_STUDENT_DONE,
  payload: student
})

export const CREATE_STUDENT_ERROR= 'CREATE_STUDENT_ERROR';
export const createStudentError = (error:any) => ({
  type: CREATE_STUDENT_ERROR,
  payload: error
})

export const SET_SELECTED_STUDENT= 'SET_SELECTED_STUDENT';
export const setSelectedStudent = (student:any) => ({
  type: SET_SELECTED_STUDENT,
  payload: student
})

export const DELETE_STUDENT= 'DELETE_STUDENT';
export const deleteStudent = (student:any) => ({
  type: DELETE_STUDENT,
  payload: student
})
