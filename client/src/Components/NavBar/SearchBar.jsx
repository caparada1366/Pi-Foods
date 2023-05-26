import React, {useState} from 'react'


export default function SearchBar({onSearch}) {

  const [receta, setReceta] = useState("");

  function handleChange(event){
     setReceta(event.target.value);
  }
  function handlePressEnter(event){
     if(event.keyCode ===13){
        onSearch(receta)
     }
  }

  return (
    <div>
        <input onChange={handleChange} onKeyDown={handlePressEnter}></input>
        <button onClick={()=>onSearch(receta)}>Buscar Receta</button>
    </div>
  )
}
