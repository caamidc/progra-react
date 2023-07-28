'use client'
import React from 'react';
import '../assets/css/Footer.css';
import Image from 'next/image'

export const Footer = () => {
  return (
    <div className="footer-container">
      <h4 className="footer-title">Contáctanos para vivir una mejor experiencia</h4>
      <p className="footer-info">Teléfono: +569 56565949</p>
      <p className="footer-info">Correo electrónico: info@eloquent.com</p>
      <p className="footer-info">Estamos disponibles para atender a nuestros clientes en línea y en cualquier lugar</p>
      <div className="footer-links">
        <a href="https://www.facebook.com/profile.php?id=100063802998778"><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" width={10} height={10}/></a>
        <a href="https://wa.me/56956565949"><img src="https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360" alt="Whatsapp"/></a>
        <a href="https://www.instagram.com/eloquent_atacama/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram"/></a>
      </div>
    </div>
  );
};

export default Footer;