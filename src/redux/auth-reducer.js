import { authAPI } from "../components/api/api"

const SET_USER_DATA = 'auth/SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default: return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: 
    { userId, email, login, isAuth } })

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
}

export const login = (email, password) => async (dispatch) => {
    let response = await authAPI.login(email, password)
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else if (response.data.resultCode === 1){
                alert('wrong email or password');
            }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
}

export default authReducer