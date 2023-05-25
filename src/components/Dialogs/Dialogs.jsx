import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Messages/Message'
import { addMessageActionCreator,updateNewMessageTextActionCreator } from '../../redux/state'

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)

    let messageElements = props.state.messagesData.map(m => <Message message={m.message} />)

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    let onPostChange = () => {
        let text = newMessageElement.current.value
        let action = (updateNewMessageTextActionCreator(text))
        props.dispatch(action)
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messageElements}

                <div>
                    <textarea onChange={onPostChange} ref={newMessageElement} value={props.newMessageText}></textarea>
                    <div>
                        <button onClick={addMessage}>send a message</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs