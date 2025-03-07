// Importamos outlet
import { Outlet } from 'react-router-dom'
// Importamos react-modal
import Modal from 'react-modal'
// Importamos Toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// Importamos el hook
import useQuiosco from '../hooks/useQuiosco'
// Importamos los componentes
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import ModalProducto from '../components/ModalProducto'
// Importamos el custom hook
import {useAuth} from '../hooks/useAuth'
// Estilos
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Activamos el modal
Modal.setAppElement('#root')

export default function Layout() {
  const {user, error} = useAuth({middleware: 'auth'})
  const { modal, handleClickModal } = useQuiosco()
  return (
    <>
      <div className='md:flex'>
        <Sidebar />

        <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'><Outlet /></main>

        <Resumen />
      </div>


      <Modal
        isOpen={modal}
        style={customStyles}
      >
        <ModalProducto />
      </Modal>

      <ToastContainer />
    </>
  )
}
