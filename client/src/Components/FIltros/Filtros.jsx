import React, {useState} from 'react'
import {filtrarDieta, filtrarOrigen, ordenarAlfa, ordenarHealthScore, quitarFiltros } from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function Filtros() {

  const {diets} = useSelector((state)=> state)  
  const dispatch = useDispatch();
  const[selectedDiets, setSelectedDiets] = useState([])

  function handleSortName(e){
    dispatch(ordenarAlfa(e.target.value))
  }

  function handleSortHS(e){
    dispatch(ordenarHealthScore(e.target.value))
  }

  function handleFilterOrigen(e){
    dispatch(filtrarOrigen(e.target.value))
  }

  function handleFilterDiets(e){
    dispatch(filtrarDieta(selectedDiets))
  }
  
  function handleDietsChange(e){
    const {name, checked} = e.target;
    if(checked){
        setSelectedDiets([...selectedDiets, name])
        
    }else {
        setSelectedDiets(selectedDiets.filter(d=>d!== name))
    }
  
  }
  
  function handleQuitarFiltros(e){
    dispatch(quitarFiltros())
    setSelectedDiets([])
  }


  return (
    <div>
        
        <label for='OrdAZ'>Orden Alfabético</label>
        <select onChange={handleSortName} name='Orden Alfabetico' id='OrdAZ'>
          <option value='default'>-</option>
          <option value='A-Z'>A-Z</option>
          <option value='Z-A'>Z-A</option>
        </select>

        <label for='OrdHS'>Orden Healt Score</label>
        <select onChange={handleSortHS} name='Orden Health Score' id='OrdHS'>
            <option value='default'>-</option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
        </select>

        <label for='filOrigen'>Filtrar por origen</label>
        <select onChange={handleFilterOrigen} name= 'Filtro Origen' id='FilOri'>
            <option value='Todos'>Todos</option>
            <option value='API'>API</option>
            <option value='DB'>DB</option>
        </select>
        <div>
            
            <label for='filDiets'>Filtrar por dietas: </label>    
                {diets && diets.map((d)=>{
                    return <label> <input type='checkbox' name={d.name} checked={selectedDiets.includes(d.name)} onChange={handleDietsChange}/>{d.name}</label>
                })}
            <button onClick={handleFilterDiets}>Filtrar</button>     
        </div>   
        <button onClick={handleQuitarFiltros}>Quitar filtros</button>
    </div>
  )
}
