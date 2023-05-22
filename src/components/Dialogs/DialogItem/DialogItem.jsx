import React from "react";
import { NavLink } from "react-router-dom";
// import s from './DialogItem.module.css'
import s from '../Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div>

        <NavLink  className = { navData => navData.isActive ? s.active : s.item } to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem