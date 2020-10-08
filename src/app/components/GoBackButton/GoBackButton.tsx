import React from "react";
import {Link, useHistory} from "react-router-dom";
import './GoBackButtonStyle.scss'

function GoBackButton () {
  const history = useHistory()
  const onBackClick = () => {
    history.goBack();
  }

  return (
    <div className="go-back-row">
      <button className="button" onClick={onBackClick}>
        Go Back
      </button>
    </div>
  )
}

export default GoBackButton
