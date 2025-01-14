// Importamos link
import { Link } from 'react-router-dom'

export default function Registro() {
  return (
    <>
        <h1 className="text-4xl font-black">Crea tu Cuenta</h1>
        <p>Llena el formulario para crear tu cuenta</p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form action="">
                <div className="mb-4">
                    <label htmlFor="name" className="text-slate-800">Nombre</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Tu Nombre"
                        className="mt-2 p-3 bg-gray-50 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="text-slate-800">Email</label>
                    <input 
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Tu Email"
                        className="mt-2 p-3 bg-gray-50 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="text-slate-800">Password</label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Tu Password"
                        className="mt-2 p-3 bg-gray-50 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password_confirmation" className="text-slate-800">Confirma tu Password</label>
                    <input 
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        placeholder="Confirma tu Password"
                        className="mt-2 p-3 bg-gray-50 w-full"
                    />
                </div>

                <input 
                    type="submit"
                    value="Crear Cuenta"
                    className="bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer w-full p-3 text-white uppercase font-bold"
                />
            </form>
        </div>

        <nav className="mt-5">
            <Link to="/auth/login" className="block text-center my-5 text-slate-500">¿Ya tienes cuenta? Iniciar Sesión</Link>
        </nav>
    </>
  )
}
