import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
const MyPosts = (props) => {

  let state = props.profilePage
  let newPostText = state.newPostText 
  let postsElements = state.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = (e) => {
    let text = e.target.value
    props.updateNewPostText(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={newPostText} />
        </div>
        <button onClick={onAddPost}>Add post</button>

      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}
export default MyPosts