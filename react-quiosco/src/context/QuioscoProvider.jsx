// Importamos el context
import { createContext, useState } from 'react'
// Importamos las categorias
import { categorias as categoriasDB } from "../data/categorias"
// Creamos el context
const QuioscoContext = createContext()
const QuioscoProvider = ({ children }) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    // Categoria actual
    const [categoriaActual, setCategoriaActual] = useState(categorias[0])

    const handleClickCategoria = id =>{
        // Filtrar categorias por id 
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        // Definir la categoria actual 
        setCategoriaActual(categoria)
    }
    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria
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