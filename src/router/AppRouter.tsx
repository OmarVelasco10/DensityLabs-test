import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Pokemons } from '../pages'
import { Pokemon } from '../pages/Pokemon'

export const AppRouter = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Pokemons />}/>
      <Route path='/pokemons' element={<Pokemons />}/> 
      <Route path='/pokemons/:name' element={<Pokemon />}/>
    </Routes>
  )
}
