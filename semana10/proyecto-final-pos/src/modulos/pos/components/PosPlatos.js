import React, { useEffect } from 'react'
import PosPlato from './PosPlato'
import {useDispatch, useSelector} from "react-redux"
import { getPlatosByCategoriaId } from '../../../redux/actions/platoAction';

const PosPlatos = () => {
    // consumo el id de la categoria seleccionada, trae un nuevo estado (como el useState osea se ejecuta cada cambio)
    const {idCategoriaSeleccionada, categorias} = useSelector((state)=>state.categoria);    
    const {platosPorCategoria} = useSelector((state)=>state.plato);

    let objCategoria = categorias.find((objCategoria)=>+objCategoria.categoria_id === +idCategoriaSeleccionada)

    // consume la lista de platos que está en el estado global
    const dispatch = useDispatch();

    // cuando se ejecuta este dispatch todo se actualiza y también  el dispatch de arriba y vuelve a ejecutarse este dispatch y se vuelve un bucle (se vuelve bucle cuando hay actualizaciones dentro de este dispatch)
    useEffect(()=>{
        if(idCategoriaSeleccionada!==-1){
            dispatch(getPlatosByCategoriaId(idCategoriaSeleccionada))
        }
        // se coloca dispatch para evitar los warning en la consola
    },[idCategoriaSeleccionada, dispatch])
    

    return (
        <div className="carta">
                            <h3>Lista de Platos Categoria: &nbsp; <span className="color-secundario">{objCategoria ? objCategoria.categoria_nom : "Selecciones categoría"}</span></h3>
                            <div className="carta__platos">
                                {
                                    platosPorCategoria.map((objPlato)=>{return <PosPlato objPlato={objPlato} key={objPlato.plato_id}/>
                                    })
                                }                                
                            </div>
                        </div>
    )
}

export default PosPlatos
