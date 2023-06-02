import dialogsReducer from "./dialogs-reducer"
import friendsOnlineBarReducer from "./friendsOnlineBar-reducer"
import profileReducer from "./profile-reducer"
import  {legacy_createStore as createStore, combineReducers } from 'redux'
import usersReducer from "./users-reducer"

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    friendsOnlineBar:friendsOnlineBarReducer,
    usersPage:usersReducer,
})


let store = createStore(reducers)

export default store