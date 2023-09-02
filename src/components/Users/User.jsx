import React from "react";
import styles from './users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom'


let User = ({user, followingInProgress, unfollow, follow, ...props}) => {
    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='' className={styles.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress
                                    .some(id => id === user.id)} 
                                    onClick={() => {unfollow(user.id)}}>unfollow</button>

                                : <button disabled={followingInProgress
                                    .some(id => id === user.id)}
                                    onClick={() => {follow(user.id)}}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
export default User