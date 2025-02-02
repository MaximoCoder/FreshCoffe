// Importamos useSWR
import useSWR from 'swr'
// Importamos cliente axios
import clienteAxios from '../config/axios';
// Formatear dinero
import {formatearDinero }from '../helpers';
// Importamos el hook
import useQuiosco from '../hooks/useQuiosco';
export default function ordenes() {
    const token = localStorage.getItem('AUTH_TOKEN')
    const fetcher = () => clienteAxios('/api/pedidos', {headers: {Authorization: `Bearer ${token}`}})

    const {data, error, isLoading} = useSWR('/api/pedidos', fetcher, {refreshInterval: 1000})
    const {handleClickCompletarPedido} = useQuiosco()

    if(isLoading) return 'Cargando...'
    // console.log(data?.data)
    // console.log(error)  
    // console.log(isLoading)
  return (
    <div>
        <h1 className="text-4xl font-black text-center">Ordenes</h1>
        <p className="text-2xl my-10">Administra tus ordenes en este apartado</p>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            {data.data.data.map( pedido => (
                <div key={pedido.id} className="p-5 bg-white shadow border-b">
                    <h2 className="text-xl font-bold">Pedido: {pedido.id}</h2>
                    <p className='text-xl font-bold text-slate-600'>Contenido del pedido:</p>
                    {pedido.productos.map(producto => (
                        <div key={producto.id} className="p-5 bg-white border-b">
                            <h2 className="text-sm font-bold">ID: {producto.id}</h2>
                            <p>{producto.nombre}</p>
                            <p>Cantidad: {producto.pivot.cantidad}</p>
                        </div>
                    ))}

                    <p>Cliente: 
                        <span className="font-bold"> {pedido.user.name}</span>
                    </p>

                    <p>Total a pagar: 
                        <span className="font-bold"> {formatearDinero(pedido.total)}</span>
                    </p>

                    <button
                        type="button"
                        value='Confirmar Pedido'
                        className="bg-indigo-600 hover:bg-indigo-800
                        w-full p-3 uppercase font-bold text-white cursor-pointer"
                        onClick={() => handleClickCompletarPedido(pedido.id)}
                    >
                            Completar pedido
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}
