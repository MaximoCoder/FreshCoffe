// importamos productos
import Producto from '../components/Producto'
import { productos } from '../data/productos'
export default function Inicio() {
  return (
    <>
      <h1 className="text-4xl font-black text-center">Productos</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {productos.map(producto => (
          <Producto 
            key={producto.imagen}
            producto={producto}
          />
        ))}
      </div>
    </>
  )
}
