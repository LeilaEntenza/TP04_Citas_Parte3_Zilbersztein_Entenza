import React from 'react'
import './Crear.css';

import { Form } from '../Form'

export default function Crear({ lista, setLista }) {
  return (
    <>
      <div className='formC'>
        <div className='form'>
        <Form listado={lista} setLista={setLista}/>
        </div>
      </div>
    </>
  )
}
