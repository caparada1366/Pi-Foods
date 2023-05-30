import React, { useEffect } from 'react'
import Cards from '../Cards/Cards'
import {useSelector, useDispatch} from 'react-redux'
import { getRecipes, getDiets  } from '../../Redux/actions';
import Filtros from '../FIltros/Filtros';
import './CardContainer.css'

export default function CardContainer() {
  const {recipes} = useSelector((state)=>state);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getRecipes())
    dispatch(getDiets());
  },[dispatch])

  function handleDietsFilter(e){

  }

  return (
    <div>
      <Filtros onChange={handleDietsFilter}></Filtros>
      <div className='card_container'>
      {
        recipes && recipes.map((recipe)=>{
          return <Cards
          id={recipe.id}
          image = {recipe.image}
          name = {recipe.name}
          diets = {recipe.diets}>
          </Cards>
        })
        } 
      </div>
    </div>
  )
}
