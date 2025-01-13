// Importamos outlet
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <div>
      Hola
      <Outlet />
    </div>
  )
}
