import {configureStore} from '../../app/store'
import * as studentStore from  '../../app/store/students'


const initialState = {
  students: studentStore.initialState
}

describe('Student Reducer', () => {

  const store = configureStore()

  it('should return the initial state', function () {
    expect(store.getState()).toEqual(initialState)
  });

  it('should delete a row', function () {
    const deleteID = '_vq5z1jmpx'
    const list = studentStore.initialState.studentList
    const index = list.findIndex(({id}) => id === deleteID)
    if(index >= 0) {
      list.splice(index, 1)
    }

    const action = studentStore.deleteStudent(deleteID);
    store.dispatch(action);
    expect(store.getState().students.studentList).toEqual(list)
  });

  it('should create a new student', function () {

    const newStudent = {
      firstName: "John",
      lastName: "Hancock",
      address: '123 N Address',
      city: "New York",
      gpa: '4.1',
      phone: '6647478193'
    }

    const action = studentStore.createStudentDone(newStudent);
    store.dispatch(action);
    const newState = store.getState().students.studentList[store.getState().students.studentList.length - 1]
    expect(newState.firstName).toEqual(newStudent.firstName)
    expect(newState.lastName).toEqual(newStudent.lastName)
    expect(newState.address).toEqual(newStudent.address)
    expect(newState.city).toEqual(newStudent.city)
    expect(newState.gpa).toEqual(newStudent.gpa)
    expect(newState.phone).toEqual(newStudent.phone)
    expect(newState.id).toBeDefined()
  });

})
