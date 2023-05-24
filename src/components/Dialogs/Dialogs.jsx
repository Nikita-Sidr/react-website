import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Messages/Message'

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)

    let messageElements = props.state.messagesData.map(m => <Message message={m.message} />)

    let newMessage = React.createRef()

    let addMessage =  () => {
        let text = newMessage.current.value
        alert(text)
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messageElements}

                <div>
                <textarea ref={newMessage}></textarea>
                <div>
                <button onClick={addMessage}>send a message</button>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs