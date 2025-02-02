// Importamos link
import { Link } from 'react-router-dom'
// LLamamos al custom hook
import { useAuth } from '../hooks/useAuth'
export default function AdminSidebar() {
    const {logout} = useAuth({middleware: 'auth'})
  return (
    <aside className="md:w-72 h-screen">
        <div className="p-4">
            <img src="/img/logo.svg" alt="Logo" className="w-40" />
        </div>
        <nav className='flex flex-col p-4'>
            <Link to={'/admin'} className='font-bold text-lg mb-3'>Ordenes</Link>
            <Link to={'/admin/productos'} className='font-bold text-lg'>productos</Link>
        </nav>
        {/*  Cerrar sesion */}
        <div className='my-5 px-5'>
        <button 
                type="button"
                className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
                onClick={() => logout()}
            >
                Cerrar sesion
            </button>
        </div>
    </aside>
  )
}
