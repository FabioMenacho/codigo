import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import AdminHeader from './component/AdminHeader'

const AdminRouter = () => {
    return (
        <>
        <AdminHeader />
        <Switch>
            <Route path="/admin/dashboard" component={AdminDashboard}/>
        </Switch>
        </>
    )
}

export default AdminRouter
