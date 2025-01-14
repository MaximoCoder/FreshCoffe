// Creamos cliente axios
import axios from "axios";

const clienteAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL,

})

// Exportamos el cliente axios
export default clienteAxios