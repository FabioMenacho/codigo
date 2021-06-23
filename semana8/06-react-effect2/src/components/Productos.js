import React from 'react'

const Productos = ({ productos,categoriaSeleccionada }) => {
    // Hacer una copia de los productos
    // Verificar si la categoria seleccionada es diferente de null para enviar el arreglo copiado de productos filtrados

    let productosRender = [...productos];
    if(categoriaSeleccionada){
        productosRender = productosRender.filter((p)=>{
            if(+p.categoria_id === +categoriaSeleccionada){
                return p;
            }
        })
    }

    return (
        <div className="row">
            {
                productosRender.map((objProducto) => {
                    return (
                        <div className="col-md-3" key={objProducto.id}>
                            <div className="card">
                                <img src={objProducto.imagen} alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h4 className="card-title">{objProducto.nombre}</h4>
                                    <p className="card-text">{objProducto.descripcion}</p>
                                    <p className="card-text">{objProducto.precio}</p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Productos


  