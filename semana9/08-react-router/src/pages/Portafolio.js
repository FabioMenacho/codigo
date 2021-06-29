import React from 'react'

const Portafolio = (props) => {

    const goToProyectoDetalle = (id) => {
// Con el click de cualquier boton redireccionar a la página del proyecto detalle con el id recibido (1,2 o 3)
        props.history.push(`/portafolio/${id}`)
    }

    return (
        <div>
            <h1 className="display-3">Portafolio</h1>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">Proyecto 1
                            
                        </p>
                        <p className="card-text"><button className="btn btn-primary" onClick={()=>{
                                goToProyectoDetalle(1);
                            }}>Ver más</button></p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">Proyecto 2
                            
                        </p>
                        <p className="card-text"><button className="btn btn-primary" onClick={()=>{
                                goToProyectoDetalle(2);
                            }}>Ver más</button></p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">Proyecto 3
                            
                        </p>
                        <p className="card-text"><button className="btn btn-primary" onClick={()=>{
                                goToProyectoDetalle(3);
                            }}>Ver más</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portafolio
