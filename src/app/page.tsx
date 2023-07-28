'use client'
import { BrowserRouter } from 'react-router-dom'
import { Header } from "@/pages/Componentes/Header"
import { AppRouter } from '../pages/Router/AppRouter'
import { Footer } from '@/pages/Componentes/Footer'

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

