import { createBrowserRouter } from 'react-router-dom'
// Importamos los layouts
import Layout from './layouts/Layout'
import AuthLayout from './layouts/AuthLayout'
// Importamos las vistas
import Inicio from './views/Inicio'
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
    },
])
// Exportamos el router 
export default router