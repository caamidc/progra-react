'use client'
import React, { useEffect, useState } from 'react'
import { Evento } from '../Interfaces';
import { registrarEvento } from '../Firebase/Promesas';
import '../assets/css/Contacto.css';

export const Contacto = () => {
    const [nombre, setNombre] = useState<string>("");
    const [apellido, setApellido] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [telefono, setTelefono] = useState<string>("");
    const [tipoEvento, setTipoEvento] = useState<string>("");
    const [fechaEvento, setFechaEvento] = useState<string>("");
    const [metodoContacto, setMetodoContacto] = useState<string>("");
    const [detalles, setDetalles] = useState<string>("");

    const [emailError, setEmailError] = useState<string>('');
    const [telefonoError, setTelefonoError] = useState<string>('');

    const registrar = () => {
    
    if (nombre && apellido && email && telefono && tipoEvento && fechaEvento && metodoContacto && detalles) {
      console.log("Nombre:",nombre);
      console.log("Apellido:",apellido);
      console.log("Correo electrónico:", email);
      console.log("Número de teléfono:", telefono);
      console.log("Tipo de evento:", tipoEvento);
      console.log("Fecha del evento:", fechaEvento);
      console.log("Método de contacto:", metodoContacto);
      console.log("Detalles adicionales:",detalles);

      if (!validacionEmail(email)) {
        alert('El email debe tener este formato "..@gmail.com"');
        return;
      }
      if (!validacionTelefono(telefono)) {
        alert('El teléfono debe contener solo números');
        return;
      }
    


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
      registrarEvento(e);
      alert("Registro exitoso");
    } else{
        alert("Debes completar todos los campos")
    }
}

  const validacionEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validacionTelefono = (phoneNumber: string) => {
    const phoneRegex = /^[0-9]+$/;
    return phoneRegex.test(phoneNumber);
  };


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
        {emailError && <div className="error">{emailError}</div>}
        
        <label>Telefono:</label><br/>
        <input type="tel" required 
            onChange={(e)=>setTelefono(e.target.value)}
            value={telefono}/>
        {telefonoError && <div className="error">{telefonoError}</div>}
        
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
        

        <button className='btn' onClick={registrar} type="button">Registrar</button>
    </form>
  )
}
