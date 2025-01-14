// Importamos helpers
import { formatearDinero } from '../helpers'
export default function Producto({producto}) {
    // Destructuring
    const {imagen, nombre, precio} = producto
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

            <button 
                type="button"
                className="bg-indigo-600 hover:bg-indigo-700 w-full mt-5 p-3 text-white font-bold uppercase "
            >
                Agregar
            </button>
        </div>
    </div>
  )
}
