// Importamos el context
import { createContext, useState, useEffect } from 'react'
// Importamos toastify
import { toast } from 'react-toastify'
// Importamos el cliente axios
import clienteAxios from '../config/axios'
// Creamos el context
const QuioscoContext = createContext()
const QuioscoProvider = ({ children }) => {

    const [categorias, setCategorias] = useState([]);
    // Categoria actual
    const [categoriaActual, setCategoriaActual] = useState({})
    // Modal
    const [modal, setModal] = useState(false)
    // Productos
    const [producto, setProducto] = useState({})
    // Pedido
    const [pedido, setPedido] = useState([])
    // Total
    const [total, setTotal] = useState(0)

    // UseEffect para calcular el total
    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)
        setTotal(nuevoTotal)
    },[pedido])
    // OBTENER LAS CATEGORIAS DE LA API
    const obtenerCategorias = async () => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            const { data } = await clienteAxios('/api/categorias', {headers: {Authorization: `Bearer ${token}`}})
            setCategorias(data.data)
            // Categoria actual
            setCategoriaActual(data.data[0])
        } catch (error) {
            console.log(error)
        }
    }

    // Cargar las categorias
    useEffect(() => {
        obtenerCategorias()
    }, [])
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
    const handleAgregarPedido = ({categoria_id, ...producto}) => {
        // Comprobar si el producto ya existe
        const existe = pedido.some(pedidoState => pedidoState.id === producto.id)
        if (existe) {
            // Actualizar la cantidad
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState)
            // Actualizar el state
            setPedido(pedidoActualizado)
            toast.success('Pedido actualizado')
        }else{
            // Nuevo producto
            setPedido([...pedido, producto])
            // Toastify
            toast.success('Agregado al pedido')
        }
        
    }

    // Funcion para editar la cantidad
    const handleEditProducto = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)[0]
        setProducto(productoActualizar)
        // Abrir el modal
        setModal(!modal)
    }

    // Funcion para eliminar un producto del pedido
    const handleEliminarProductoPedido = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
        // Toastify
        toast.success('Producto eliminado')
    }

    // Funcion para generar orden
    const handleSubmitNuevaOrden = async (e) => {
        // Obtenemos el token del localStorage
        const token = localStorage.getItem('AUTH_TOKEN')

        try {
            const { data } = await clienteAxios.post('/api/pedidos', {
                total,
                productos : pedido.map(producto=>{
                    return {
                        id: producto.id,
                        cantidad: producto.cantidad
                    }
                }),
            },{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            // Toastify
            toast.success(data.message)
            // Reiniciar el pedido
            setPedido([])
        } catch (error) {
            console.log(error)
        }
    }

    // Funcion para completar el pedido
    const handleClickCompletarPedido = async id =>{
        // Obtenemos el token del localStorage
        const token = localStorage.getItem('AUTH_TOKEN')

        try {
            await clienteAxios.put(`/api/pedidos/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            // Toastify
            toast.success('Pedido completado')
            
        } catch (error) {
            console.log(error)
        }
    }

    // Funcion para poner un producto como agotado
    const handleClickProductoAgotado = async id =>{
        // Obtenemos el token del localStorage
        const token = localStorage.getItem('AUTH_TOKEN')

        try {
            await clienteAxios.put(`/api/productos/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            // Toastify
            toast.success('Pedido completado')
            
        } catch (error) {
            console.log(error)
        }
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
                handleAgregarPedido,
                handleEditProducto,
                handleEliminarProductoPedido,
                total,
                handleSubmitNuevaOrden,
                handleClickCompletarPedido,
                handleClickProductoAgotado
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