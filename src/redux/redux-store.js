import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import  {legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import usersReducer from "./users-reducer"
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer,
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store