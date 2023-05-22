import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Messages/Message'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Nick' id='1'/>
                <DialogItem name='Oleg' id='2'/>
                <DialogItem name='Rodion' id='3'/>
                <DialogItem name='Vlad' id='4'/>
                <DialogItem name='Viktor' id='5'/>
                <DialogItem name='Valera' id='6'/>
            </div>
            <div className={s.messages}>
                <Message text='Hello!'/>
                <Message text='How are you?'/>
                <Message text="What's new on your React website?"/>
            </div>
        </div>
    )
}

export default Dialogs