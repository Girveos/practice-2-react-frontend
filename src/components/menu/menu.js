import React, { useEffect, useState } from "react";
import "./menu.scss"; // Importa los estilos de SCSS
import avatar from "../../assets/images/avatar.png";
import logo from "../../assets/images/Logos_UAM-08.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function MenuReact() {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const handleMenuToggle = () => {
      const menuList = document.getElementById("menu-list");
      menuList.classList.toggle("show-menu");
    };

    const handleResize = () => {
      if (window.innerWidth > 530) {
        const menuList = document.getElementById("menu-list");
        menuList.classList.remove("show-menu");
      }
    };

    const handleScroll = () => {
      // Obtén la distancia desde la parte superior de la página
      const scrollY = window.scrollY;

      // Define una altura de desplazamiento mínima para mostrar los iconos
      const minHeightToShowIcons = 100; // Ajusta este valor según tus necesidades

      // Muestra los iconos si el usuario ha bajado lo suficiente en la página
      if (scrollY > minHeightToShowIcons) {
        setShowIcons(true);
      } else {
        setShowIcons(false);
      }
    };

    // Agrega eventos de escucha para el menú, el redimensionamiento de la ventana y el desplazamiento
    const menuToggle = document.getElementById("menu-toggle");
    menuToggle.addEventListener("click", handleMenuToggle);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Asegúrate de eliminar los eventos de escucha cuando el componente se desmonte
    return () => {
      menuToggle.removeEventListener("click", handleMenuToggle);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      {/* Sección de iconos que se mostrará al desplazarse hacia abajo */}
      {showIcons && (
        <div className="icon-section">
          <a href="#" className="iconlist">
            <FontAwesomeIcon icon={faHome} />
          </a>

          <a href="#products1" className="iconlist">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </a>

          <a href="#contact1" className="iconlist">
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
      )}

      <div className="menu">
        <img className="uamLogo" src={logo} alt="Logo UAM" />
        <button id="menu-toggle" className="menu-toggle">
          ☰
        </button>
        <ul id="menu-list">
          <li>
            <a href="#flex1">Flexbox</a>
          </li>
          <li>
            <a href="#products1">Products</a>
          </li>
          <li>
            <a href="#contact1">Contact</a>
          </li>
        </ul>
        <div className="avatar-container">
          <img src={avatar} className="avatar" alt="Foto de perfil" />
        </div>
      </div>

      <div className="flex1" id="flex1">
      </div>

      <div className="products1" id="products1">
      </div>

      <div className="contact1" id="contact1">
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default MenuReact;
