import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AdminProductos from './pages/AdminProductos'
import AdminProductosCrear from './pages/AdminProductosCrear'
import AdminHeader from './components/AdminHeader'

const AdminRouter = () => {
    return (
        <>
        {/* ya no se usa el Router ya que esta dentro de un router en el APP */}
        {/* El AdminHeader aparece en todos los Switch de este enrutador */}
            <AdminHeader />
            <Switch>
                {/* las más específicas van primero sino nunca va a entrar ya que el otro tiene una ruta mas corta e igual */}
                <Route path="/admin/productos/crear" component={AdminProductosCrear}/>
                <Route path="/admin/productos" component={AdminProductos}/>
            </Switch>
        </>
    )
}

export default AdminRouter
