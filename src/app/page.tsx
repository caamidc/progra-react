'use client'
import { BrowserRouter } from 'react-router-dom'
import Header from './Componentes/Header'
import AppRouter from './Router/AppRouter'
import Footer from './Componentes/Footer'

export default function Home() {
  return(
    <>
      <BrowserRouter>
        <Header/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
    </>
  )}

