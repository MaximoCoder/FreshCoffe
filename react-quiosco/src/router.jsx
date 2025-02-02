import { createBrowserRouter } from 'react-router-dom'
// Importamos los layouts
import Layout from './layouts/Layout'
import AuthLayout from './layouts/AuthLayout'
import AdminLayout from './layouts/AdminLayout'
// Importamos las vistas
import Inicio from './views/Inicio'
import Login from './views/auth/Login'
import Registro from './views/auth/Registro'
import Ordenes from './views/ordenes'
import Productos from './views/productos'
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
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Ordenes />
            },
            {
                path: '/admin/productos',
                element: <Productos />
            }
        ]
    }
])
// Exportamos el router 
export default router