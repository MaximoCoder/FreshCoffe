import { createBrowserRouter } from 'react-router-dom'
// Importamos los layouts
import Layout from './layouts/Layout'
import AuthLayout from './layouts/AuthLayout'
// Importamos las vistas
import Inicio from './views/Inicio'
import Login from './views/auth/Login'
import Registro from './views/auth/Registro'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        // Children quienes tendran acceso al layout
        children: [
            {
                index: true,
                element: <Inicio />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/registro',
                element: <Registro />
            },
        ]
    },
])
// Exportamos el router 
export default router