import React from 'react'

const Footer = () => {
    let anio = new Date().getFullYear(); 
    return (
        <>
            <hr />
            <footer>
                <p>{anio} Año del Bicentenario</p>
                <small>Todos los derechos reservados</small>
            </footer>
        </>
    )
}

export default Footer
