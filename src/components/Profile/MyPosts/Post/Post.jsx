import React from "react";
import s from './Post.module.css'
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://amiel.club/uploads/posts/2022-03/1647747400_3-amiel-club-p-kartinki-tigra-na-avu-3.jpg" alt="" />
      {props.message}
      <div>
        <span>likes </span>{props.likesCount}
      </div>

    </div>
  )
}
export default Post