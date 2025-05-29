
import React from 'react';
import { useEffect, useState} from 'react'
import './App.css';
import { Routes, Route, Link } from 'react-router';
import Navbar from './Navbar';
import Ver from './Ver';
import Crear from './Crear';
import Home from './Home';

function App() {
  const [lista, setLista] = useState([]);
 useEffect(()=>{
    setLista(JSON.parse(localStorage.getItem("citas"))); 
  },[]);
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ver" element={<Ver/>}/>
        <Route path="/crear" element={<Crear/>}/>
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
