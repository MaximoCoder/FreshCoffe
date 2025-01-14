import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Importamos el router
import { RouterProvider } from 'react-router-dom'
// Importamos el context
import { QuioscoProvider } from './context/QuioscoProvider'
import  router  from './router'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuioscoProvider>
        <RouterProvider router={router} />
    </QuioscoProvider>
  </StrictMode>,
)
