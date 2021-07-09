import React from 'react'
// forma 1 de importar imagen
// import searchSVG from "./../../../assets/images/search.svg";

const PosHeader = () => {
    return (
        <header className="header">
            <div className="header__logo">
                {/* forma 2 de importar imagen: se carga cuando esta en el public */}
                <img src="/images/search.svg" alt="" />
            </div>
            <div className="header__buscador">
                <img src="/images/logo.svg" alt="" />
                <input type="text" className="header__input" placeholder="Busca un término" />
            </div>
            <div className="header__usuario">
                <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="" />
                <span>Jorge Garnica</span>
            </div>
        </header>
    )
}

export default PosHeader
