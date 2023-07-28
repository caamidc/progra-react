import React from 'react'
import '../assets/css/Componente1.css'

interface Props{
    nombre?:string,
    apellido?:string,
}
export const Componente1 = (props:Props) => {
  return (
    <div>
      <section id="home" className="py-5">
          <div className="container">
                  <h1 className="display-4">Eloquent - Productora de Eventos</h1>
                  <p className="lead">Somos una productora de eventos con experiencia en la organización de eventos corporativos, bodas, fiestas y más. Nos encargamos de todo, desde la planificación hasta la ejecución, para que usted pueda disfrutar de su evento sin preocupaciones.</p>
                  <a href="#contact" className="btn btn-primary">Contáctenos</a>
          </div>
      </section>

    </div>
  )
}

export default Componente1;