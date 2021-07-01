import axios from "axios";
import { URL_BACKEND } from "../environments/environments";

export const getProductos = async () => {
    let response = await axios.get(`${URL_BACKEND}/producto`);
    
    return response;
}