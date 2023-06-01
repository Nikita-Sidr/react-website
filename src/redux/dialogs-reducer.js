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

    let stateCopy = {
        ...state,
        // messagesData:[...state.messagesData]     
    }

    switch(action.type){
        case  ADD_MESSAGE:{
            let text = stateCopy.newMessageText
            stateCopy.newMessageText = ''
            stateCopy.messagesData.push({id:5,message:text})
            return stateCopy
        }

        case UPDATE_NEW_MESSAGE_TEXT:{
            stateCopy.newMessageText = action.newMessage
            return stateCopy
        }
            
        default:return state
    }

}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text }
}

export default dialogsReducer