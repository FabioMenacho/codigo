import axios from "axios";
import { URL_BACKEND } from "../environments/environments";

export const getCategorias = async () => {
    const url = `${URL_BACKEND}/categories`;
    const rpta = await axios.get(url);
    return rpta;
};