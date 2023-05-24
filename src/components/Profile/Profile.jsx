import React from "react";
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />

      <MyPosts updateNewPostText={props.updateNewPostText} newPostText={props.profilePage.newPostText} postsData={props.profilePage.postsData} addPost={props.addPost}/>

    </div>
  )
}
export default Profile