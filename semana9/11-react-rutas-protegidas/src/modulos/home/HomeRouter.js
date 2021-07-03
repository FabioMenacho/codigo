import React from 'react'
import { Switch,Route } from 'react-router-dom'
import HomeHome from './pages/HomeHome'

const HomeRouter = () => {
    return (
        <>
            <Switch>
                <Route path="/" component={HomeHome}/>
            </Switch>
        </>
    )
}

export default HomeRouter
