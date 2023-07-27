'use client'
import { BrowserRouter } from 'react-router-dom'

import { Header } from "@/pages/Componentes/Header"
//import { AppRouter } from '../pages/Router/AppRouter'
import { Footer } from '@/pages/Componentes/Footer'

const Page =()=>{
  return(
    <>
    <BrowserRouter>
      <Header/>

      <Footer/>
    </BrowserRouter>
    </>
  )}

  export default Page;