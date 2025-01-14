// Importamos link
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <>
      <h1 className="text-4xl font-black">Iniciar Sesión</h1>
      <p>Llena el formulario para iniciar sesión</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form action="">
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
        
          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer w-full p-3 text-white uppercase font-bold"
          />
        </form>
      </div>

      <nav className="mt-5">
        <Link to="/auth/registro" className="block text-center my-5 text-slate-500">¿No tienes una cuenta? Regístrate</Link>
      </nav>
    </>
  )
}
