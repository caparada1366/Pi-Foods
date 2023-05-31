import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { searchRecipe, quitarFiltros } from '../../Redux/actions';


export default function SearchBar() {
   const dispatch = useDispatch();

  const [receta, setReceta] = useState("");

  function handleChange(event){
     setReceta(event.target.value);
  }
  function handlePressEnter(event){
     if(event.keyCode ===13){
        handleClickSearch(receta)
     }
  }

  function handleClickSearch(e){
   dispatch(searchRecipe(receta))
  }

  function handleClickBorrar(e){
   dispatch(quitarFiltros())
   
  }

  return (
    <div>
        <input onChange={handleChange} onKeyDown={handlePressEnter}></input>
        <button onClick={handleClickSearch}>Buscar Receta</button>
        <button onClick={handleClickBorrar}>Borrar busqueda</button>
    </div>
  )
}
