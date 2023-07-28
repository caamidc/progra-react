import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'next/image'; // Importa next/image
import '../assets/css/Header.css';

export const Header = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        {/* Utiliza next/image en lugar de Image */}
        <img src="https://scontent.flsc3-1.fna.fbcdn.net/v/t39.30808-6/310631695_515173853952710_7214520315734833268_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF3RtdczVX7gLWAJYept_ns24E2irkliyTbgTaKuSWLJAnlYL7dUDYtqnXlKTedmohXZ-43mpWWtbbHA4OPuQJd&_nc_ohc=RrQDm-S9C2oAX8W0vrJ&_nc_ht=scontent.flsc3-1.fna&oh=00_AfAIRy4nL32seVRIzjsSnhtx1O_pwCx-ysfhVFgOyE4bCg&oe=64C7F59D"alt="Logo"width={40} height={40} // Especifica el ancho deseado para la imagen
        />
      </Link>
      <Link to="/inicio" className="nav-link">
        Inicio
      </Link>
      <Link to="/acerca" className="nav-link">
        Acerca De
      </Link>
      <Link to="/servicios" className="nav-link">
        Servicios
      </Link>
      <Link to="/galeria" className="nav-link">
        Galeria
      </Link>
      <Link to="/contacto" className="nav-link">
        Contacto
      </Link>
      <Link to="/registros" className="nav-link">
        Registros
      </Link>
    </nav>
  );
};

export default Header;
