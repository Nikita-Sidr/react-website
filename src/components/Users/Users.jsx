import React from "react";
import styles from './users.module.css'
import userPhoto from '../../assets/images/user.png'
import {NavLink} from 'react-router-dom'
import axios from "axios";


let Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)/200 

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <button className={props.currentPage === p && styles.selectedPage }
                    onClick={() => {props.onPageChanged(p)}}>{p}</button>

                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/'+ u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='' className={styles.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                        withCredentials:true,
                                        headers: {
                                            "API-KEY" : "cea7f6ff-70aa-4b30-a0c8-20df7c74e567"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode==0){
                                            props.unfollow(u.id)
                                        }
                                    })

                                    props.unfollow(u.id) 
                                
                                }}>unfollow</button>
                                : <button onClick={() => { 
                                    
                                    props.follow(u.id)
                                    
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                        withCredentials:true,
                                        headers: {
                                            "API-KEY" : "cea7f6ff-70aa-4b30-a0c8-20df7c74e567"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode==0){
                                            props.follow(u.id)
                                        }
                                    })

                                    }}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
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
export default Users