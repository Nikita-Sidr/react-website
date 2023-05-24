import React from "react";
import { NavLink } from "react-router-dom";
// import s from './../Dialogs.module.css'
import s from './DialogItem.module.css'

const DialogItem = (props) => {
    return (
        <div>
            <div className={s.item}>
                <div className={s.corner}>
                <img className='' src="https://i.pinimg.com/736x/48/43/82/4843827ecf15dca3513c337d8360e74b.jpg" alt="" />
                <NavLink className={navData => navData.isActive ? s.active : s.item} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
                </div>
            </div>
        </div>
    )
}

export default DialogItem