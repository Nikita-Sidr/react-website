import dialogsReducer from "./dialogs-reducer"
import friendsOnlineBarReducer from "./friendsOnlineBar-reducer"
import profileReducer from "./profile-reducer"
import  {legacy_createStore as createStore, combineReducers } from 'redux'

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    friendsOnlineBar:friendsOnlineBarReducer,
})

let store = createStore(reducers)

export default store