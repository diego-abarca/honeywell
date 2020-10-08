import {CREATE_STUDENT_DONE, CREATE_STUDENT_ERROR, DELETE_STUDENT, SET_SELECTED_STUDENT} from "./students.actions";

const generateID = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};


export const initialState = {
  studentList: [
    {
      "id": "_vq5z1jmpx",
      "image": "https://purepng.com/public/uploads/large/purepng.com-female-studentstudenteducationalinstitutionstudentsuniversity-studentschoolfemale-student-1421526922656gpilp.png",
      "firstName": "Sarah",
      "lastName": "Connor",
      "address": "123 Main St",
      "city": "San Francisco",
      "phone": "4359960512",
      "gpa": 4.0
    },
    {
      "id": "_h4skeoc9b",
      "image": "https://previews.123rf.com/images/racorn/racorn1307/racorn130706420/21205080-portrait-of-happy-young-male-student-in-classroom.jpg",
      "firstName": "John",
      "lastName": "McClane",
      "address": "451 North Av",
      "city": "New York",
      "phone": "5648820142",
      "gpa": 2.8
    }
  ],
  pending: false,
  error: null,
  type: ''
}

export function studentsReducer(state = initialState, {type, payload}:any) {
  switch (type) {
    case SET_SELECTED_STUDENT: {
      return { ...state, selectedStudent: payload}
    }
    case CREATE_STUDENT_DONE: {
      const list = state.studentList;
      list.push({id: generateID(), ...payload})
      return {...state, studentList: [...list]}
    }
    case DELETE_STUDENT: {
      const list = state.studentList
      const index = list.findIndex(({id}) => id === payload)
      if(index >= 0) {
        list.splice(index, 1)
      }
      return {...state, studentList: [...list] }
    }
    default:
      return state
  }
}
