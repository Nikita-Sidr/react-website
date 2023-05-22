import React from "react";
import s from './Post.module.css'
const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://amiel.club/uploads/posts/2022-03/1647747400_3-amiel-club-p-kartinki-tigra-na-avu-3.jpg" alt="" />
      post 1

      <div>
        <span>like</span>
      </div>

    </div>
  )
}
export default Post