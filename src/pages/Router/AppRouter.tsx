'use client'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Componente1 } from '@/pages/Componentes/Componente1';
import { Registros } from '@/pages/Componentes/Registros';
import { Contacto } from '@/pages/Componentes/Contacto';
import { Galeria } from '@/pages/Componentes/Galeria';
import { AcercaDe } from '@/pages/Componentes/AcercaDe';
import { Servicios } from '@/pages/Componentes/Servicios';
import { Actualizar } from '@/pages/Componentes/Actualizar';
import { Eliminar } from '@/pages/Componentes/Eliminar';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Componente1 />} />
      <Route path='/acerca' element={<AcercaDe />} />
      <Route path='/servicios' element={<Servicios />} />
      <Route path='/galeria' element={<Galeria />} />
      <Route path='/contacto' element={<Contacto />} />
      <Route path='/registros' element={<Registros />} />
      <Route path='/actualizar/:idEvento' element={<Actualizar />} />
      <Route path='/eliminar/:idEvento' element={<Eliminar />} />
      <Route path='*' element={<Componente1 />} />
    </Routes>
  );
};

export default AppRouter;
