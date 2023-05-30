const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogsData: [
        { id: 1, name: 'Nick' },
        { id: 2, name: 'Oleg' },
        { id: 3, name: 'Rodion' },
        { id: 4, name: 'Vlad' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' }
    ],
    messagesData: [
        { id: 1, message: 'Hello!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: "What's new on your React website?" }
    ]
}

const dialogsReducer = (state = initialState,action) => {
    switch(action.type){
        case  ADD_MESSAGE:
            let text = state.newMessageText
            state.newMessageText = ''
            state.messagesData.push({id:5,message:text})
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state
            
        default:return state
    }

}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text }
}

export default dialogsReducer