import React from "react";
import s from './FriendOnline.module.css'
const FriendOnline = (props) => {
    return (
        <div className={s.friends}>
            <img src="https://i.pinimg.com/736x/48/43/82/4843827ecf15dca3513c337d8360e74b.jpg" alt="" />
            {props.name}
        </div>
    )
}
export default FriendOnline