import React from "react";
import s from './Profile.module.css'
const Profile = () => {
    return (
        <div className={s.content}>
          <img src='https://cdn.wallpapersafari.com/44/54/F4oMUk.jpg' alt=''/>
          <div>     
            ava + description     
          </div>
          <div>
            My posts
            <div className={s.posts}>
              new post
            </div>
            <div>
              <div className={s.item}>
                post 1
              </div>
              <div className={s.item}>
                post 2
              </div>
            </div>
          </div>
        </div>
    )
}
export default Profile