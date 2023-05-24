import React from "react";
import FriendOnline from "./FriendOnline/FriendOnline";
import s from './FriendsOnline.module.css'
const FriendsOnline = (props) => {
    let friendsOnline = props.friendsOnline.map(f => <FriendOnline name={f.name}/>)
    return (
        <div className={s.friendItems}>
            <div>Friends Online</div>
            <div className={s.friends}>
            {friendsOnline}
            </div>
        </div>
    )
}
export default FriendsOnline