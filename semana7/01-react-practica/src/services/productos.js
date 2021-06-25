import axios from "axios"
import {URL_BACKEND} from "../environments/environments"

export const getProductos = async () => {
    const url = `${URL_BACKEND}/producto`;
    const rpta = await axios.get(url);
    return rpta;
}