import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Messages/Message'

// let dialogs = [
//     { id: 1, name: 'Nick' },
//     { id: 2, name: 'Oleg' },
//     { id: 3, name: 'Rodion' },
//     { id: 4, name: 'Vlad' },
//     { id: 5, name: 'Viktor' },
//     { id: 6, name: 'Valera' }
// ]

// let messages = [
//     { id: 1, message: 'Hello!' },
//     { id: 2, message: 'How are you?' },
//     { id: 3, message: "What's new on your React website?" }
// ]



const Dialogs = (props) => {
    
    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
    
    let messageElements = props.state.messagesData.map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs