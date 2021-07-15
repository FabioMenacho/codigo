import React from 'react'
import {Switch, Route} from "react-router-dom"
import AuthLogin from "./pages/AuthLogin"

const AuthRouter = () => {
    return (
        <Switch>
            <Route path="/auth/login" component={AuthLogin}/>
        </Switch>
    )
}

export default AuthRouter
