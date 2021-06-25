import axios from "axios";
import { URL_BACKEND } from "../environments/environments";

export const getProductos = async (pagina) => {
    let url = "";
    if(pagina>0){
        url = `${URL_BACKEND}/producto?page=${pagina}&limit=8`;
    } else{
        url = `${URL_BACKEND}/producto`
    }
    
    const rpta = await axios.get(url);
    return rpta;
};