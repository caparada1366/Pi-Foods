import React from 'react'

export default function Cards({image, name, diets}) {
  return (
    <div>
      <h2>Nombre: {name}</h2>
      <img className='img' src={image} alt={name}></img>
      <h3>Dietas: {diets}</h3>
    </div>
  )
}
