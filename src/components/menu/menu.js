import React, { useEffect, useState } from "react";
import "./menu.scss"; // Importa los estilos de SCSS
import avatar from "../../assets/images/avatar.png";
import logo from "../../assets/images/Frank.png";
import cardInfo from "../../assets/images/infocard.jpg";
import PQRSpic from "../../assets/images/PQRSpic.jpg";
import tiempoEntrega from "../../assets/images/tiempo.jpg";
import discount from "../../assets/images/descuentos.jpg";
import premio from "../../assets/images/regalo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function MenuReact() {
  const [showIcons, setShowIcons] = useState(false);
  const [showAdditionalCards, setShowAdditionalCards] = useState(false);

  const handleCardClick = () => {
    console.log("Handle Card Click"); // Agrega esta línea para depuración
    setShowAdditionalCards(!showAdditionalCards);
  };
  

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

      <div className="flex1" id="flex1"></div>

      <div className="products1" id="products1">
        <div className="cards">
          <div className="infocard" onClick={handleCardClick}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={cardInfo}
                  alt="carry"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Información
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Aquí podrás encontrar Información vital que deberas tener en
                    cuenta a la hora de adquirir nuestros productos sobre
                    derechos y deberes con los que cuentas.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="PQRScard">
            <Card sx={{ maxWidth: 340 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={PQRSpic}
                  alt="shoe"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Foro de Preguntas
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Puedes realizar cualquier pregunta respecto a tú compra,
                    tiempos de espera, precio y/o cualquier otra inquietud que
                    creas que te podemos responder.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          {showAdditionalCards && (
            <>
              <div className="subclassinfo">
              <Card sx={{ maxWidth: 340 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={tiempoEntrega}
                  alt="shoe"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   Tiempos de entrega
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="140"
                  image={discount}
                  alt="shoe"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   Descuentos
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="140"
                  image={premio}
                  alt="shoe"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   Premios
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="contact1" id="contact1"></div>

      <div className="footer"></div>
    </div>
  );
}

export default MenuReact;
