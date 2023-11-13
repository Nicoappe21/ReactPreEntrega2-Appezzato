import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {

  const greeting = "Bienvenidos a Casacashowroom"

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<ItemListContainer mensaje={greeting}/>}/>
      <Route path='/:categoryId' element={<ItemListContainer mensaje={greeting}/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

