// Importamos el context
import { createContext, useState } from 'react'
// Importamos las categorias
import { categorias as categoriasDB } from "../data/categorias"
// Creamos el context
const QuioscoContext = createContext()
const QuioscoProvider = ({ children }) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    // Categoria actual
    const [categoriaActual, setCategoriaActual] = useState(categorias[0])
    // Modal
    const [modal, setModal] = useState(false)
    // Productos
    const [producto, setProducto] = useState({})
    // Pedido
    const [pedido, setPedido] = useState([])
    // Funcion para cuando se cambia la categoria
    const handleClickCategoria = id =>{
        // Filtrar categorias por id 
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        // Definir la categoria actual 
        setCategoriaActual(categoria)
    }

    // Funcion para el modal
    const handleClickModal = () => {
        setModal(!modal)
    }

    // Funcion para los productos
    const handleSetProducto = producto => {
        setProducto(producto)
    }

    // Funcion para el pedido
    const handleAgregarPedido = ({categoria_id, imagen, ...producto}) => {
        setPedido([...pedido, producto])
    }
    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria, 
                modal, 
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

// Exportamos el context
export {
    QuioscoProvider
}

export default QuioscoContext