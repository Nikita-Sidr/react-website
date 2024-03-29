import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from '../../../assets/images/user.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if(e.target.file){
      props.savePhoto(e.target.file[0])
    }
  }

  return (
    <div >
      {/* <div>
        <img className={s.img} src='https://cdn.wallpapersafari.com/44/54/F4oMUk.jpg' alt='' />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto } alt="" className={s.mainPhoto} />
        {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
        <div>name : {props.profile.fullName}</div>
        <div>About Me : {props.profile.aboutMe}</div>
        <div>Profile Status 
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
      </div>
    </div>
  )
}
export default ProfileInfo