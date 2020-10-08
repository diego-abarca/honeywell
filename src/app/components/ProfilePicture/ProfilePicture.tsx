import React from "react";
import noImage from '../../assets/no-image.png'
import './ProfilePictureStyle.scss'

function ProfilePicture ({image}) {

  const src = image ? image : noImage

  return (
    <div className="profile-picture">
      <img src={src} alt="Profile Picture"/>
    </div>
  )
}

export default ProfilePicture
