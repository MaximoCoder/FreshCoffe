// Importamos helpers
import { formatearDinero } from '../helpers'
// Importamos el hook
import useQuiosco from '../hooks/useQuiosco'
export default function Producto({ producto, botonAgregar = false, botonDisponible = false }) {
    // Para el modal
    const { handleClickModal, handleSetProducto, handleClickProductoAgotado } = useQuiosco()
    // Destructuring
    const { imagen, nombre, precio } = producto
    return (
        <div className="border p-3 shadow bg-white">
            <img
                className="w-full"
                src={`../img/${imagen}.jpg`}
                alt="Imagen producto"
            />
            <div className="p-5">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">{formatearDinero(precio)}</p>
                {botonAgregar && (
                    <button
                        type="button"
                        className="bg-indigo-600 hover:bg-indigo-700 w-full mt-5 p-3 text-white font-bold uppercase "
                        onClick={() => {
                            handleClickModal();
                            handleSetProducto(producto);
                        }}
                    >
                        Agregar
                    </button>
                )}
                {botonDisponible && (
                    <button
                        type="button"
                        value='Confirmar Pedido'
                        className="bg-indigo-600 hover:bg-indigo-800
                        w-full p-3 uppercase font-bold text-white cursor-pointer"
                        onClick={() => handleClickProductoAgotado(producto.id)}
                    >
                        Producto Agotado
                    </button>
                )}
            </div>
        </div>
    )
}
