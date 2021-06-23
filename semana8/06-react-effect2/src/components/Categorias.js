import React from 'react'

const Categorias = ({categorias, seleccionarCategoria, categoriaSeleccionada}) => {
    return (
        <ul className="list-group">                   
            {
                categorias.map((cat)=>{
                    // la variable bgPrimary, si cat.id es igual a categoriaSeleccionada entonces asignar bg-primary sino no hacerla en blanco
                    let bgPrimary = +cat.id === +categoriaSeleccionada ? "bg-primary" : "" ;

                    return <li className={`list-group-item ${bgPrimary}`} key={cat.id} onClick={()=>{
                        if(+categoriaSeleccionada === +cat.id){
                            seleccionarCategoria(null);
                        }else{
                        seleccionarCategoria(cat.id);
                    }
                    }}>{cat.nombre}</li>
                })
            }
        </ul>
    )
}

export default Categorias
