// Importamos link
import { Link } from 'react-router-dom'
// Importamos createRef y useState
import { createRef, useState } from 'react'
// Importamos el componente de alerta
import Alerta from '../../components/Alerta'
// LLamamos al custom hook
import { useAuth } from '../../hooks/useAuth'
export default function Registro() {
    // obtener los valores de los inputs
    const nameRef = createRef()
    const emailRef = createRef()
    const passwordRef = createRef()
    const passwordConfirmationRef = createRef()

    //Manejamos los errores con un state
    const [errores, setErrores] = useState([])
    const {registro} = useAuth({
        middleware: 'guest',
        url: '/'
    })

    // Manejamos el envio del formulario
    const handleSubmit = async e => {
        e.preventDefault();
        // obtenemos los datos
        const datos = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
        //console.log(datos);
        registro(datos, setErrores)
    }
  return (
    <>
        <h1 className="text-4xl font-black">Crea tu Cuenta</h1>
        <p>Llena el formulario para crear tu cuenta</p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form 
                onSubmit={handleSubmit}
                noValidate
            >
                {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>): null}
                <div className="mb-4">
                    <label htmlFor="name" className="text-slate-800">Nombre</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Tu Nombre"
                        className="mt-2 p-3 bg-gray-50 w-full"
                        ref={nameRef}
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
                <div className="mb-4">
                    <label htmlFor="password_confirmation" className="text-slate-800">Confirma tu Password</label>
                    <input 
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        placeholder="Confirma tu Password"
                        className="mt-2 p-3 bg-gray-50 w-full"
                        ref={passwordConfirmationRef}
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
