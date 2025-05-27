import React from 'react'
import { Routes, Route } from 'react-router';
import Crear from './Crear'
import Ver from './Ver'

export default function Navbar() {
  return (
    <div>      
        <Routes>
            <Route path="/" element={<Crear />}/>
            <Route path="/" element={<Ver />}/>
        </Routes>
    </div>
  )
}
