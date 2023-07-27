'use client'
import { BrowserRouter } from 'react-router-dom'
import { Footer } from "./Componentes/Footer"
import { Header } from "./Componentes/Header"
import { AppRouter } from './Router/AppRouter'

export default function Home(){
  return(
    <>
    <BrowserRouter>
      <Header/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
    </>
  )
}