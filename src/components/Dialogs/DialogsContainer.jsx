import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Messages/Message'
import { addMessageActionCreator,updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <Dialogs addMessageAction={addMessage} updateNewMessageText={onMessageChange} dialogsPage={state}/>
    )
}

export default DialogsContainer