import React from "react"

// debe empezar con mayuscula los componentes como Footer
const Footer = () => {
    // Las variabls pueden estar fuera del return
    let anio = new Date().getFullYear();
    // Solo se retorna 1 elemento en el return utilizar un fragmento (elemento vacio)
    return (
        <>
            <hr />
            <footer>
                <p>Año del Bicentenario</p>
                <small>Código - {anio} - Todos los derechos reservados</small>
            </footer>
        </>
    )
}

export default Footer;