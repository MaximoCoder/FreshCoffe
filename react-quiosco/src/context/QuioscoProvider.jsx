// Importamos el context
import { createContext } from 'react'
// Creamos el context
const QuioscoContext = createContext()
const QuioscoProvider = ({ children }) => {

    return (
        <QuioscoContext.Provider
            value={{

            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

// Exportamos el context
export {
    QuioscoProvider
}

export default QuioscoContext