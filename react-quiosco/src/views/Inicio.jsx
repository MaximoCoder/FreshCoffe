// importamos productos
import Producto from '../components/Producto'
import { productos as data } from '../data/productos'
// Importamos el hook
import useQuiosco from '../hooks/useQuiosco'
export default function Inicio() {
  const { categoriaActual } = useQuiosco()
  // Filtramos los productos por la categoria actual
  const productos = data.filter(producto => producto.categoria_id === categoriaActual.id)
  return (
    <>
      <h1 className="text-4xl font-black text-center">{categoriaActual.nombre}</h1>
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
