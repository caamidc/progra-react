import React, { useEffect, useState } from 'react'
import { obtenerEventos } from '../Firebase/Promesas'
import { Evento } from '../Interfaces'
import '../assets/css/Registros.css'
import { Link } from 'react-router-dom'

export const Registros = () => {
    const [eventos,setEventos] = useState<Evento[]>([])

    const redenrizarDatos = ()=>{
        var elementos = eventos.map((e)=>{
            return <tr>
                <td>{e.nombre}</td>
                <td>{e.apellido}</td>
                <td>{e.email}</td>
                <td>{e.telefono}</td>
                <td>{e.tipoEvento}</td>
                <td>{e.fechaEvento}</td>
                <td>{e.metodoContacto}</td>
                <td>{e.detalles}</td>
                <td><Link to={"/actualizar/"+e.idEvento}>Actualizar</Link></td>
                <td><Link to={"/eliminar/"+e.idEvento}>Eliminar</Link></td>
            </tr>
        })
        return elementos
    }
    useEffect(()=>{
    //cargar los datos de firebase
        obtenerEventos().then((listado)=>{
            console.log("cargando listado")
            console.log(listado)
            setEventos(listado)
    })
    },[])


  return (
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Tipo de evento</th>
                <th>Fecha del evento</th>
                <th>Método de contacto</th>
                <th>Detalles adicionales</th>
                <th>Actualizar</th>
                <th>Eliminar</th>
            </tr>
            {
                redenrizarDatos()
            }
        </table>
  )
}
