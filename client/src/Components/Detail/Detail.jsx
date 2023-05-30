import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  axios  from 'axios';

export default function Detail() {
  var {id} = useParams();
  
  const[receta, setReceta] = useState({});

  useEffect(()=>{   
    axios.get(`http://localhost:3001/recipes/${id}`).then(({data})=>{
      if(data){
        setReceta(data)
      } else{
        window.alert(`No hay recetas con el id ${id}`)
      }
    }).catch(err => err.message)
  },[])

  return (
    <div>
      <h1>{receta.id}</h1>
      <h2>{receta.name}</h2>
      <h2>{receta.summary}</h2>
      <h2>{receta.health_Score}</h2>
      <h2>{receta.stepByStep}</h2>
      <h2>{receta.diets}</h2>
    </div>
  )
}
