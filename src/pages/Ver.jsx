import React from 'react'
import { Listado } from '../Listado'

export default function Ver({ lista, setLista }) {
 console.log(lista)
  return (
    <>
      <h1>Citas</h1>
      <Listado listado={ lista } setLista={ setLista }/>
    </>
  )
}
