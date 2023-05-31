import React, { useEffect } from 'react'
import Cards from '../Cards/Cards'
import {useSelector, useDispatch} from 'react-redux'
import { getRecipes, getDiets  } from '../../Redux/actions';
import Filtros from '../FIltros/Filtros';
import './CardContainer.css'
import Paginado from '../Paginado/Paginado';

export default function CardContainer() {
  const {recipes, pagActual} = useSelector((state)=>state);
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getRecipes())
    dispatch(getDiets());
  },[dispatch])

  let desde = (pagActual -1)*9
  let hasta = (pagActual* 9)
  let cantPages = Math.ceil(recipes.length /9)
  let recipesPages = recipes?.slice(desde, hasta)


  return (
    <div>
      <Filtros></Filtros>
      <div className='card_container'>
      {
        recipesPages && recipesPages.map((recipe)=>{
          return <Cards
          id={recipe.id}
          image = {recipe.image}
          name = {recipe.name}
          diets = {recipe.diets}>
          </Cards>
        })
        } 
      </div>
      <div>
        <Paginado cantPages={cantPages}/>
      </div>
    </div>
  )
}
