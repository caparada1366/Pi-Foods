import React, { useState } from 'react'
import validation from './validation'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from '../../Redux/actions'


export default function FormCrearReceta() {
  const dispatch = useDispatch()
  const {diets} = useSelector((state)=>state)

  const [receta, setReceta]=useState({
    name: "",
    summary: "",
    health_Score: 0,
    image: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    summary:"",
    health_Score: "",
    image: "",
    steps:""
  })

  const [pasos, setPasos]= useState([]);
  const [inputPaso, setInputPaso]=useState("");

  const [selectedDiets, setSelectedDiets]= useState([]);

  function handleChangeDiets(e){
    const{name, checked} = e.target;
    if(checked){
      setSelectedDiets([...selectedDiets, name])
    }else{
      setSelectedDiets(selectedDiets.filter(valor => valor !== name))
    }
  }

  function handleChangePaso(e){
    setInputPaso(e.target.value)
  }

  function handleSubmitPaso(e){
    e.preventDefault();
    const confirmar = window.confirm('¿Está seguro que la información del paso de la receta es correcta?')
    if(confirmar){
    setPasos([...pasos, inputPaso])
    setInputPaso("")
    }
  }

  function handleChange(e){
    setReceta({
      ...receta,
      [e.target.name]: e.target.value
    })
    setErrors(validation({
      ...receta,
      [e.target.name]: e.target.value,
    }, pasos))
  }

  async function  handleSubmitForm(e){
    e.preventDefault();
    if(pasos.length < 1 ){
      alert('Debe ingresar al menos un paso')
    }else{
      try{
      const datos = {
        name: receta.name,
        image: receta.image,
        summary: receta.summary,
        health_Score: receta.health_Score,
        stepByStep: pasos,
        diets: selectedDiets
      }
      await axios.post('http://localhost:3001/recipes',datos)
        alert('Receta creada')
        dispatch(getRecipes())
      }catch(err){
        alert(err.message)
      }
     
    }
  }

  async function testPost(){
    try{}
    catch(err){
      alert(err.message)
    }
    
  }

  return (
    <div>
      <form className='form'>
        <label>Nombre: <input name='name' value={receta.name} onChange={handleChange}/></label>
        {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
        <label>Imagen url: <input name='image' value={receta.image} onChange={handleChange}/></label>
        {errors.image && <p style={{color: 'red'}}>{errors.image}</p>}
        <label>Health Score: <input name='health_Score' value={receta.health_Score} onChange={handleChange}/></label>
        {errors.health_Score && <p style={{color: 'red'}}>{errors.health_Score}</p>}
        <label>Resumen: <textarea name='summary' value={receta.summary} onChange={handleChange}/></label>
        {errors.summary && <p style={{color: 'red'}}>{errors.summary}</p>}

        <label>Paso: <textarea name='paso' value={inputPaso} onChange={handleChangePaso}/></label>
        {errors.steps && <p style={{color: 'red'}}>{errors.steps}</p>}
        <button onClick={handleSubmitPaso}>Añadir paso</button>
        <div>
          {diets && diets.map((diet)=>{
            return <label><input type='checkbox' name={diet.name} checked={selectedDiets.includes(diet.name)} onChange={handleChangeDiets}/>{diet.name} </label>
          })}
        </div>
        <button type='submit' onClick={handleSubmitForm}>Crear Receta</button>

        <div>
        Pasos:
        <ol>
        {pasos && pasos.map((st)=>{
            return <li>{st}</li>
          })}
        </ol>
      </div>
      </form>
     
    </div>
  )
}
