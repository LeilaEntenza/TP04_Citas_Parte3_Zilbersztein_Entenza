import React from 'react'
import { Routes, Route, Link } from 'react-router';
import Crear from './pages/Crear'
import Ver from './pages/Ver'
import './Navbar.css';


export default function Navbar() {
  return (     
        <nav>
        <ul>
          <li>
            <Link to="/TP04_Citas_Parte3_Zilbersztein_Entenza/">Home</Link>
          </li>
          <li>
            <Link to="/TP04_Citas_Parte3_Zilbersztein_Entenza/crear">Crear</Link>
          </li>
          <li>
            <Link to="/TP04_Citas_Parte3_Zilbersztein_Entenza/ver">Ver</Link>
          </li>
        </ul>
      </nav>
  )
}
