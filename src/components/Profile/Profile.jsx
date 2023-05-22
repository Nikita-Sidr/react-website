import React from "react";
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
const Profile = () => {
    return (
        <div >
          <img className={s.img} src='https://cdn.wallpapersafari.com/44/54/F4oMUk.jpg' alt=''/>
          <div>     
            ava + description     
          </div>
          <MyPosts/>
        </div>
    )
}
export default Profile