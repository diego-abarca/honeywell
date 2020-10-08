import React from "react";
import { Link } from "react-router-dom";
import './CreateButtonStyle.scss'

function CreateButton () {
  return (
    <div className="create-student-row">
      <Link to='/create-student'>
        <button className="button">
          Create a Student
        </button>
      </Link>
    </div>
    )
}

export default CreateButton
