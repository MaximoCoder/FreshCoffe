// Importamos link
import { Link } from 'react-router-dom'
// Importamos createRef y useState
import { createRef, useState } from 'react'
//Importamos el customHook
import {useAuth} from '../../hooks/useAuth'
// Importamos el componente de alerta
import Alerta from '../../components/Alerta'
export default function Login() {
    // obtener los valores de los inputs
    const emailRef = createRef()
    const passwordRef = createRef()
    

    //Manejamos los errores con un state
    const [errores, setErrores] = useState([])
    const {login} = useAuth({
        middleware: 'guest',
        url: '/'
    })
    // Manejamos el envio del formulario
    const handleSubmit = async e => {
        e.preventDefault();
        // obtenemos los datos
        const datos = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        //console.log(datos);
        // llamar al custom hook
        login(datos, setErrores)
    }
  return (
    <>
      <h1 className="text-4xl font-black">Iniciar Sesión</h1>
      <p>Llena el formulario para iniciar sesión</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form 
          onSubmit={handleSubmit}
          noValidate
        >
          {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>): null}
          <div className="mb-4">
            <label htmlFor="email" className="text-slate-800">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Tu Email"
              className="mt-2 p-3 bg-gray-50 w-full"
              ref={emailRef}
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
              ref={passwordRef}
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
