import React from "react";
import { NavLink} from "react-router-dom";
import Login from './LoginAndSignUp/Login'

const LoginPage = (props) => {

    return (
        <div>
            <div>Don't have an account?</div>
            <div>
            {<NavLink to={'/signup'}>signup</NavLink>}
            </div>
            <h1>Login</h1>
            <div>
            <Login/>
            </div>
        </div>
    )
}

export default LoginPage