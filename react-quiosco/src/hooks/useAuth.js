// Importamos useEffect
import { useEffect } from 'react'
// Importamos useSWR
import useSWR from 'swr'
// Importamos useNavigate
import { useNavigate } from 'react-router-dom'
//Importamos el cliente axios
import clienteAxios from '../config/axios';

export const useAuth = ({middleware, url}) =>{
    // Obtenemos el token del localStorage
    const token = localStorage.getItem('AUTH_TOKEN')
    // Usamos useNavigate
    const navigate = useNavigate()
    const {data: user, error, mutate} = useSWR('/api/user', () => 
        clienteAxios('/api/user',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(error?.response?.data?.errors)
        })
    )
    const login = async (datos, setErrores) =>{
        try{
            const {data} = await clienteAxios.post('/api/login', datos)
            // Guardar el token en el localStorage
            localStorage.setItem('AUTH_TOKEN', data.token)
            setErrores([])
            await mutate()
            //console.log(respuesta)
        }catch(error){
            setErrores(Object.values(error.response.data.errors)) // Acceder a los errores
        }
    }
    const registro = async (datos, setErrores) =>{
        try{
            const {data} = await clienteAxios.post('/api/registro', datos)
            // Guardar el token en el localStorage
            localStorage.setItem('AUTH_TOKEN', data.token)
            // Resetear los errores
            setErrores([])
            await mutate()
            //console.log(respuesta)
        }catch(error){
            setErrores(Object.values(error.response.data.errors)) // Acceder a los errores
        }
    }
    const logout = async () =>{
        try{
            await clienteAxios.post('/api/logout', null,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            localStorage.removeItem('AUTH_TOKEN')
            await mutate(undefined)
        } catch(error){
            throw Error(error?.response?.data?.errors)
        }

    }
    // Debug
    // console.log(user);
    // console.log(error);

    // Manejamos el middleware
    useEffect(() => {
        // Si el middleware es guest y el usuario esta logueado
        if(middleware === 'guest' && url && user){
            navigate(url)
        }
        // Si es admin
        if(middleware === 'guest' && user && user.admin){
            navigate('/admin')
        }
        // Si no es admin
        if(middleware === 'admin' && user && !user.admin){
            navigate('/')
        }
        // Si el middleware es auth y el usuario no esta logueado
        if(middleware === 'auth' && error){
            navigate('/auth/login')
        }
    }, [user, error])
    // Retornamos los metodos
    return {
        login,
        registro,
        logout,
        user,
        error
    }
}