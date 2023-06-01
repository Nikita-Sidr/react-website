import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Messages/Message'
import { addMessageActionCreator,updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)

    let messageElements = state.messagesData.map(m => <Message message={m.message} />)

    let newMessageBody = state.newMessageText

    let addMessage = () => {
        props.addMessageAction()
    }
    let onMessageChange = (e) => {
        let text = e.target.value
        props.updateNewMessageText(text)
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messageElements}

                <div>
                    <textarea onChange={onMessageChange} value={props.newMessageText}></textarea>
                    <div>
                        <button onClick={addMessage}>send a message</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs