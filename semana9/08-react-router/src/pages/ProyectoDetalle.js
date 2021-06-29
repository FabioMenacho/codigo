import React from 'react'

const ProyectoDetalle = (props) => {
    console.log(props);
    return (
        <div>
            <h1 className="display-3">Detalle del Proyecto: {props.match.params.proyecto_id}</h1>
        </div>
    )
}

export default ProyectoDetalle
