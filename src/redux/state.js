const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hello, how is your day? =)', likesCount: 15 },
                { id: 2, message: "It's my second post!", likesCount: 20 },
                { id: 2, message: "Additional test on update with map", likesCount: 1 }],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        friendsOnlineBar: {
            friendsOnlineData: [
                { name: 'Rodion' },
                { name: 'Valera' },
                { name: 'Oleg' }
            ]
        },
    },
    _callSubscriber() {
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },


    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)

        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messagesData.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessage
            this._callSubscriber(this._state)
        }
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text }
}

export default store