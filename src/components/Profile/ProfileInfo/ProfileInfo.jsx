import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div >
      <div>
        <img className={s.img} src='https://cdn.wallpapersafari.com/44/54/F4oMUk.jpg' alt='' />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}
export default ProfileInfo