
import React from 'react';
import { useEffect, useState} from 'react'
import './App.css';
import { Routes, Route, Link } from 'react-router';
import Navbar from './Navbar';
import Ver from './pages/Ver';
import Crear from './pages/Crear';
import Home from './pages/Home';

function App() {
  const [lista, setLista] = useState([]);
 useEffect(()=>{
    if(localStorage.getItem("citas")){
      setLista(JSON.parse(localStorage.getItem("citas"))); 
    }
  },[]);
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ver" element={<Ver lista={lista} setLista={setLista}/>}/>
        <Route path="/crear" element={<Crear lista={lista} setLista={setLista}/>}/>
      </Routes>
      {/*<h1>Citas</h1>
      <p>Concretá citas para que atendamos a tus mascotas!</p>
      <div className='container'>
        <img width="400" src='https://i.pinimg.com/736x/10/bc/bd/10bcbdc51fdacda178fbf70267e19251.jpg'/>
  </div>*/}
    </>
  )
}

export default App
