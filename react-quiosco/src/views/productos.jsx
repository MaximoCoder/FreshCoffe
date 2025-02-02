// Importamos useSWR
import useSWR from 'swr'
// Importamos cliente axios
import clienteAxios from '../config/axios';
//  Componente de producto
import Producto from '../components/Producto'
export default function productos() {
    // token
    const token = localStorage.getItem('AUTH_TOKEN')
    const fetcher = () => clienteAxios('/api/productos', { headers: { Authorization: `Bearer ${token}` } }).then(res => res.data);
    const { data, error, isLoading } = useSWR('/api/productos', fetcher, { refreshInterval: 10000 })

    if (isLoading) return 'Cargando...'
    return (
        <div>
            <h1 className="text-4xl font-black text-center">Productos</h1>
            <p className="text-2xl my-10">Maneja la disponibilidad desde aqui</p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {data.data.map(producto => (
                    <Producto
                        key={producto.imagen}
                        producto={producto}
                        botonDisponible={true}
                    />
                ))}
            </div>
        </div>
    )
}
