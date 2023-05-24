import { rerenderEntireTree } from "../render"

let state = {
    profilePage: {
        postsData: [
            { id: 1, message: 'Hello, how is your day? =)', likesCount: 15 },
            { id: 2, message: "It's my second post!", likesCount: 20 },
            { id: 2, message: "Additional test on update with map", likesCount: 1 }],
        newPostText: 'your text'
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
}

export let addPost = () => {
    let newPost = {
        id: state.profilePage.postsData.length + 1,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost)
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default state