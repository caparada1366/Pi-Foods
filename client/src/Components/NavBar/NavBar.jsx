import React from 'react'
import SearchBar from './SearchBar'
import './NavBar.css'

export default function NavBar({onSearch}) {
  return (
    <div className='navbar'>
        <button>Home</button>
        <SearchBar onSearch={onSearch}></SearchBar>
        <button>Crear receta</button>
     
    </div>
  )
}
