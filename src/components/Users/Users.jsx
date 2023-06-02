import React from "react";
import styles from './users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'https://i1.sndcdn.com/artworks-Busax4iq9P2psmMc-0zy90w-t500x500.jpg', followed: true, fullName: 'Nikita', status: 'Boss of this gym', location: { city: 'Kiev', country: 'Ukraine' } },
            { id: 2, photoUrl: 'https://i1.sndcdn.com/artworks-Busax4iq9P2psmMc-0zy90w-t500x500.jpg', followed: false, fullName: 'Vasilyy', status: 'Slave', location: { city: 'Dnipro', country: 'Ukraine' } },
            { id: 3, photoUrl: 'https://i1.sndcdn.com/artworks-Busax4iq9P2psmMc-0zy90w-t500x500.jpg', followed: true, fullName: 'Rostislav))', status: 'Toxic Genious', location: { city: 'Kharkiv', country: 'Ukraine' } },
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt='' className={styles.userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users