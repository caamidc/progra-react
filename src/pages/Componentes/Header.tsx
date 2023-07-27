'use client'
import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import '@/pages/assets/css/Header.css';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="navbar-brand">
        <a className="navbar-brand" href="#">Eloquent
          <Image src="https://z-p3-scontent.flsc2-1.fna.fbcdn.net/v/t39.30808-6/310631695_515173853952710_7214520315734833268_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF3RtdczVX7gLWAJYept_ns24E2irkliyTbgTaKuSWLJAnlYL7dUDYtqnXlKTedmohXZ-43mpWWtbbHA4OPuQJd&_nc_ohc=qtTSd1P11i8AX8f6rgu&_nc_zt=23&_nc_ht=z-p3-scontent.flsc2-1.fna&oh=00_AfBc5PImuX3LbrbuI8-ZJ8wzhC9CzLblhiLSFPFRYKpFag&oe=64C4011D"alt="Logo"/>
      </a>
      </Link>
      <Link href="/inicio" className="nav-link">
        Inicio
      </Link>
      <Link href="/acerca" className="nav-link">
        Acerca De
      </Link>
      <Link href="/servicios" className="nav-link">
        Servicios
      </Link>
      <Link href="/galeria" className="nav-link">
        Galeria
      </Link>
      <Link href="/contacto" className="nav-link">
        Contacto
      </Link>
      <Link href="/registros" className="nav-link">
        Registros
      </Link>
    </nav>
  );
};

export default Header;