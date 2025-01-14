import { useState } from 'react'
// Importamos el hook
import useQuiosco from '../hooks/useQuiosco'
// Importamos el helper
import { formatearDinero } from '../helpers'
export default function ModalProducto() {
    const { producto, handleClickModal, handleAgregarPedido } = useQuiosco()

    // Cantidad
    const [cantidad, setCantidad] = useState(1)
    // Calcular el precio basado en la cantidad
    const precio = formatearDinero(producto.precio * cantidad)
    return (
        <div className='md:flex gap-10'>
            <div className='md:w-1/3'>
                <img src={`../img/${producto.imagen}.jpg`} alt={producto.nombre} />
            </div>
            <div className='md:w-2/3'>
                <div className='flex justify-end'>
                    <button
                        onClick={handleClickModal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <h1 className='text-3xl font-bold mt-5'>{producto.nombre}</h1>
                <p className='mt-5 font-black text-4xl text-amber-500'>{precio}</p>

                <div className='flex gap-2 mt-5'>
                    <button
                        type='button'
                        onClick={() => {
                            if (cantidad <= 1) return
                            setCantidad(cantidad - 1)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                    <p className='text-3xl'>{cantidad}</p>
                    <button
                        type='button'
                        onClick={() => {
                            if (cantidad >= 5) return
                            setCantidad(cantidad + 1)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </button>
                </div>
                <button
                    type='button'
                    className='bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 rounded text-white font-bold uppercase'
                    onClick={() => {
                        handleAgregarPedido({ ...producto, cantidad })
                        handleClickModal()
                    }}
                >
                    Añadir al pedido
                </button>
            </div>
        </div>
    )
}
