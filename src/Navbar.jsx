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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/crear">Crear</Link>
          </li>
          <li>
            <Link to="/ver:lista">Ver</Link>
          </li>
        </ul>
      </nav>
  )
}
