import React from 'react'
import { Listado } from './Listado'
import { BrowserRouter as Router,
  Link,
  Route,
  Routes, useParams } from 'react-router'

export default function Ver() {
  const {lista} = useParams();
  return (
    <div>hola</div>
  )
}
