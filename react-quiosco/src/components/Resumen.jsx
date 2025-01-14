// Importamos el hook
import useQuiosco from '../hooks/useQuiosco'

import ResumenProducto from './ResumenProducto'
export default function Resumen() {
  const { pedido } = useQuiosco()
  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-black">Mi Pedido</h1>
      <p className="text-lg my-5">
        Aquí aparecen los productos que has agregado
      </p>
      <div className='py-10'>
        {pedido.length === 0 ? (
          <p className='text-center text-2xl'>No hay elementos en tu pedido</p>
        ) : (
          pedido.map(producto => (
            <ResumenProducto key={producto.id} producto={producto} />
          ))
        )}
      </div>
      <p className='text-xl mt-10'>Total a pagar:{''}</p>

      <form action="" className='w-full '>
        <div className='mt-5'>
          <input
            type="submit"
            value='Confirmar Pedido'
            className='bg-indigo-600 hover:bg-indigo-800 w-full p-3 uppercase font-bold text-white cursor-pointer'

          />
        </div>
      </form>
    </aside>
  )
}
