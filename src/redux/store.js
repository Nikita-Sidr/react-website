// import dialogsReducer from "./dialogs-reducer"
// import friendsOnlineBarReducer from "./friendsOnlineBar-reducer"
// import profileReducer from "./profile-reducer"

// let store = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 { id: 1, message: 'Hello, how is your day? =)', likesCount: 15 },
//                 { id: 2, message: "It's my second post!", likesCount: 20 },
//                 { id: 2, message: "Additional test on update with map", likesCount: 1 }],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogsData: [
//                 { id: 1, name: 'Nick' },
//                 { id: 2, name: 'Oleg' },
//                 { id: 3, name: 'Rodion' },
//                 { id: 4, name: 'Vlad' },
//                 { id: 5, name: 'Viktor' },
//                 { id: 6, name: 'Valera' }
//             ],
//             messagesData: [
//                 { id: 1, message: 'Hello!' },
//                 { id: 2, message: 'How are you?' },
//                 { id: 3, message: "What's new on your React website?" }
//             ]
//         },
//         friendsOnlineBar: {
//             friendsOnlineData: [
//                 { name: 'Rodion' },
//                 { name: 'Valera' },
//                 { name: 'Oleg' }
//             ]
//         },
//     },
//     _callSubscriber() {
//     },

//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },


//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.friendsOnlineBar = friendsOnlineBarReducer(this._state.friendsOnlineBar, action)

//         this._callSubscriber(this._state)
//     }

// }
// export default store