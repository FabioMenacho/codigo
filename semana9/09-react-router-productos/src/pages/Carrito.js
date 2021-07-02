import React from 'react'
import { useSelector } from 'react-redux'
import CardProductoItem from '../components/CardProductoItem'

const Carrito = () => {

    const carrito = useSelector((state)=> state.carrito)

    return (
        <div className="row">
            <div className="col-12">
                {
                    carrito.productos.map((objProducto)=>{
                        return <CardProductoItem objProducto={objProducto}/>
                    })
                }               

            </div>
        </div>
    )
}

export default Carrito
