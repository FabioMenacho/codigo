import { v4 as uuidv4 } from 'uuid';
import  {format} from "date-fns"
import axios from "axios"
import { URL_BACKEND } from '../environments/environments';

export const postPagarPedido = async (objPedido, mesaId) => {
        // según la foto de backend, lo q nos pide el backend
    let objPedidoBackend = {
        usu_id: 2,
        mesa_id: mesaId,
        pedido_est: "pagado",
        // de la librería uuid
        pedido_nro: uuidv4(),
        pedido_fech: format(new Date(), "yyy-MM-dd hh:mm:ss"),
        pedidoplatos: objPedido.platos.map((objPlatoPedido)=>{
            return {
                plato_id: objPlatoPedido.plato_id,
                pedidoplato_cant: objPlatoPedido.cantidad
            }
        })
    }
    // console.log(objPedidoBackend);
    const endpoint = `${URL_BACKEND}/pedido`;
    const response = await axios.post(endpoint, JSON.stringify(objPedidoBackend),{
        headers: {
            'Content-type':'application/json'
        }
    })
    return response.data;    
}