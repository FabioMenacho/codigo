import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"

const NavBar = () => {
// Para atrapar el carrito
    // const estado= useSelector((state)=>{
    // const carrito = useSelector((state)=>{
    //     return state.carrito;
    // })
    // console.log(estado);

    // depende del useSelector y se actualiza cada cambio
    const carrito = useSelector((state)=>state.carrito);
    console.log(carrito);

    return (
        <div className="row">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                  <div class="container-fluid">
                    <div class="row w-100">
                      <div className="col text-end">
                        {/* cambiamos button x Link para pasar a la pag carrito */}
                        <Link className="btn btn-success" to={"/carrito"}>Carrito ({carrito.productos.length})</Link>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
    )
}

export default NavBar
