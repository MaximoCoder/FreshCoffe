// Importamos el hook
import useQuiosco from "../hooks/useQuiosco"
export default function Categoria({categoria}) {
    const {icono, id, nombre} = categoria
    const {handleClickCategoria, categoriaActual} = useQuiosco()
  return (
    <div className={`${categoriaActual?.id === id ? 'bg-amber-400' : '' } flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>
        <img 
            className="w-12"
            src={`../img/icono_${icono}.svg`} 
            alt="Imagen logo icono" 
        />
        <button 
            className="text-lg font-bold cursor-pointer truncate"
            type="button"
            onClick={() => handleClickCategoria(id)}
        >{nombre}</button>
    </div>
  )
}
