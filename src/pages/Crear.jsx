import React from 'react'
import './Crear.css';

import { Form } from '../Form'

export default function Crear({ lista, setLista }) {
  return (
    <>
      <h1>Fijar una cita</h1>
      <div className='formC'>
        <div className='form'>
        <Form listado={lista} setLista={setLista}/>
        </div>
      </div>
    </>
  )
}
