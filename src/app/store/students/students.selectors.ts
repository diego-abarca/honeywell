export const getStudentListSelector = (state) => state.students.studentList
export const getStudentPendingSelector = (state) => state.students.pending
export const getStudentErrorSelector = (state) => state.students.error
export const getStudentSelectedSelector = (state) => state.students.selectedStudent
export const getStudentSelectedObjectSelector = (state) => {
  return state.students.selectedStudent && state.students.studentList.find(({id}) => id === state.students.selectedStudent)
}

