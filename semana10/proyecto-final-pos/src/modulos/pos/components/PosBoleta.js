import React, {useState} from 'react'
import PosBoletaItem from './PosBoletaItem'
import { useSelector } from "react-redux"
import PosModalBoleta from './PosModalBoleta'

const PosBoleta = () => {

    const { pedidos } = useSelector((state) => state.pedido)
    const { idMesaSeleccionada } = useSelector((state) => state.mesa)
    // creamos variable global local para el modal
    const [mostrar, setMostrar] = useState(false)

    let objPedidoActual = pedidos.find((objPedido) => objPedido.mesaId === idMesaSeleccionada)



    return (
        <div className="boleta">
            <h3>Pedido Mesa: &nbsp;<span className="color-secundario">01</span></h3>
            <hr />
            <div className="comanda">
                <h4 className="comanda__mesa">Mesa 01</h4>
                <p className="comanda__usuario">Carlos Jimenez</p>
                <hr />
                <ul className="comanda__lista">
                    {
                        objPedidoActual ? objPedidoActual.platos.map((objPlatoPedido, i) => {
                            return <PosBoletaItem objPlatoPedido={objPlatoPedido} key={i} />
                        }) : null
                    }
                </ul>
                <button className="boton boton-success boton-block" onClick={()=>{
                    setMostrar(true);
                }}>PAGAR</button>
            </div>
            <PosModalBoleta mostrar={mostrar} setMostrar={setMostrar}/>
        </div>
    )
}

export default PosBoleta
