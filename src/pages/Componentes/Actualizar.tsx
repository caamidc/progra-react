'use client'
import { useParams} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import { obtenerEvento, actualizarEvento} from '@/Firebase/Promesas'
import { Evento } from '@/app/Interfaces'

export const Actualizar = () => {
    const params = useParams()
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [telefono, setTelefono] = useState<string>("");
    const [tipoEvento, setTipoEvento] = useState<string>("");
    const [fechaEvento, setFechaEvento] = useState<string>("");
    const [metodoContacto, setMetodoContacto] = useState<string>("");
    const [detalles, setDetalles] = useState<string>("");
    const [idEvento,setIdEvento] = useState("")
    useEffect(()=>{
        if(params.idEvento!=undefined){
            obtenerEvento(params.idEvento).then((e)=>{
                if(e!=undefined && e.idEvento!= undefined){
                    setNombre(e.nombre)
                    setApellido(e.apellido)
                    setEmail(e.email)
                    setTelefono(e.telefono)
                    setTipoEvento(e.tipoEvento)
                    setFechaEvento(e.fechaEvento)
                    setMetodoContacto(e.metodoContacto)
                    setDetalles(e.detalles)
                    setIdEvento(e.idEvento!)
                }
            })//se recupera el objeto en base a un id  
        }
    },[params.idEvento])
   

    const actualizar = () => {
        const e:Evento={
            nombre,
            apellido,
            email,
            telefono,
            tipoEvento,
            fechaEvento,
            metodoContacto,
            detalles
        };
        actualizarEvento(idEvento,e).then(()=>{
            alert("Se actualizo con exito")
        })
    }

    return (
    <form className='form'>
        <label>Nombre:</label><br/>
        <input type="text" required 
            onChange={(e)=>setNombre(e.target.value)}
            value={nombre}/>
        

        <label>Apellido:</label><br/>
        <input type="text" required 
            onChange={(e)=>setApellido(e.target.value)}
            value={apellido}/>
        

        <label>Correo Electronico:</label><br/>
        <input type="email" required 
            onChange={(e)=>setEmail(e.target.value)}
            value={email}/>
        
        
        <label>Telefono:</label><br/>
        <input type="tel" required 
            onChange={(e)=>setTelefono(e.target.value)}
            value={telefono}/>
        
        
        <label>Tipo de evento:</label>
        <select name="tipoEvento" required 
          onChange={(e) => setTipoEvento(e.target.value)}
          value={tipoEvento}>
          <option value="">Seleccionar tipo de evento</option>
          <option value="cumpleaños">Cumpleaños</option>
          <option value="boda">Boda</option>
          <option value="empresa">Evento de empresa</option>
          <option value="navideño">Navideño</option>
          <option value="verano">Evento de verano</option>
        </select>
        <br/>

        <label>Fecha del evento:</label><br/>
        <input type="date" required 
        onChange={(e) => setFechaEvento(e.target.value)}
        value={fechaEvento}/>
        

        <div className="form-radio">
          <label>Método de contacto:</label><br />
          <input type="radio" name="metodo-contacto" value="email" required 
          checked={metodoContacto === "email"} onChange={() => setMetodoContacto("email")} />
          <label>Correo electrónico</label>
          <input type="radio" name="metodo-contacto" value="telefono" required checked={metodoContacto === "telefono"} onChange={() => setMetodoContacto("telefono")} />
          <label>Teléfono</label><br></br>
        </div>

        <label>Detalles adicionales:</label><br/>
        <textarea rows={5} required 
        onChange={(e) => setDetalles(e.target.value)}
        value={detalles}></textarea>

        <button className='btn' onClick={actualizar} type="button">Actualizar</button>
    </form>
  )
}

export default Actualizar;