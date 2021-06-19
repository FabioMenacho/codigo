import React from 'react'

const Header = (props) => {
    return (
        <header>
            {props.texto} - {props.fecha}
        </header>
    )
}

export default Header
