import React, { useEffect } from 'react';
import './menu.scss'; // Importa los estilos de SCSS
import avatar from '../../assets/images/avatar.png'
import logo from '../../assets/images/Logos_UAM-08.png'

function MenuReact() {
  useEffect(() => {
    const handleMenuToggle = () => {
      const menuList = document.getElementById('menu-list');
      menuList.classList.toggle('show-menu');
    };

    const handleResize = () => {
      if (window.innerWidth > 530) {
        const menuList = document.getElementById('menu-list');
        menuList.classList.remove('show-menu');
      }
    };

    // Agrega eventos de escucha para el menú y el redimensionamiento de la ventana
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.addEventListener('click', handleMenuToggle);
    window.addEventListener('resize', handleResize);

    // Asegúrate de eliminar los eventos de escucha cuando el componente se desmonte
    return () => {
      menuToggle.removeEventListener('click', handleMenuToggle);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container">
      <div className="menu">
        <img className="uamLogo" src={logo} alt="Logo UAM" />
        <button id="menu-toggle" className="menu-toggle">☰</button>
        <ul id="menu-list">
          <li><a href="./flex">Flexbox</a></li>
          <li><a href="./products">Products</a></li>
          <li><a href="./contact">Contact</a></li>
        </ul>
        <div className="avatar-container">
          <img src={avatar} className="avatar" alt="Foto de perfil" />
        </div>
      </div>
      <div className="content">
        <h1>prueba</h1>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default MenuReact;
