'use client'
import React from 'react'
import { Routes, Route} from 'react-router-dom'
import {Componente1} from '../Componentes/Componente1'
import { Registros } from '../Componentes/Registros'
import { Contacto } from '../Componentes/Contacto'
import {Galeria} from '../Componentes/Galeria'
import {AcercaDe} from '../Componentes/AcercaDe'
import {Servicios} from '../Componentes/Servicios'
import { Actualizar } from '../Componentes/Actualizar'
import { Eliminar } from '../Componentes/Eliminar'



export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<Componente1/>}/> 
        <Route path='/acerca' element={<AcercaDe/>}/> 
        <Route path='/servicios' element={<Servicios/>}/>
        <Route path='/galeria' element={<Galeria/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/registros' element={<Registros/>}/>
        <Route path='/actualizar/:idEvento' element={<Actualizar/>}/>
        <Route path='/eliminar/:idEvento' element={<Eliminar/>}/> 
    </Routes>
  )
}
