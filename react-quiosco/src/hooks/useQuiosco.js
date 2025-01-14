// Importamos useContext
import { useContext } from 'react'
// Importamos el context
import QuioscoContext  from '../context/QuioscoProvider'

const useQuiosco = () => {
    return useContext(QuioscoContext)
}

export default useQuiosco