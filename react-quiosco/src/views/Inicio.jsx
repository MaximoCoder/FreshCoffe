// importamos USESWR
import useSWR from 'swr'
import Producto from '../components/Producto'
// Importamos el hook
import useQuiosco from '../hooks/useQuiosco'
import clienteAxios from '../config/axios'
export default function Inicio() {
  const { categoriaActual } = useQuiosco()
  // Consulta SWR
  const fetcher = () => clienteAxios('/api/productos').then(data => data.data)
  const { data, isLoading } = useSWR('/api/productos', fetcher,{
    refreshInterval: 1000
  })

  if(isLoading) return 'Cargando...';
  // Filtramos los productos por la categoria actual
  const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id)
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
