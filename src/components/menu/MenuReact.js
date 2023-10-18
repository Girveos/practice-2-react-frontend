import React, { useEffect, useState } from "react";
import "./menu.scss";
import avatar from "../../assets/images/avatar.png";
import logo from "../../assets/images/Frank.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import don from "../../assets/images/don.gif";
import eladio from "../../assets/images/eladio.gif";
import emilia from "../../assets/images/emilia.gif";
import { images } from "../../assets";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
/* import { PostsList } from "../posts"; */

/* import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material"; */

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const posts = [
  {
    _id: "1",
    title: "Nuevos lanzamientos",
    subtitle: "¡Lo último de moda!",
    Description: "¡Explora nuestra colección de nuevos lanzamientos de zapatos y mantente a la moda con los diseños más recientes!",
    avatar: images.post1,
  },
  {
    _id: "2",
    title: "Linea exclusiva",
    subtitle: "¡Productos que solo encuentras aquí!",
    Description: "¡Encuentra zapatos exclusivos y de alta calidad que te ayudarán a expresar tu estilo único.!",
    avatar: images.post2,
  },
  {
    _id: "3",
    title: "Colaboraciones",
    subtitle: "¡Colaboración de Adidas con BaddBunny!",
    Description: "¡Descubre nuestra colección de zapatos nacidos de emocionantes colaboraciones con diseñadores y celebridades!",
    avatar: images.post3,
  },
  {
    _id: "4",
    title: "Descuento del dia",
    subtitle: "¡Referencia de producto con descuento!",
    Description: "¡Aprovecha nuestras ofertas diarias en zapatos de alta calidad a precios sorprendentes!",
    avatar: images.post4,
  },
];

export const MenuReact = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const handleOpen = (post_id) => {
    const post = posts.find((post) => post._id === post_id);
    setSelectedPost(post);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  /* const [showAdditionalCards, setShowAdditionalCards] = useState(false); */

  /*  const handleCardClick = () => {
    console.log("Handle Card Click");
    setShowAdditionalCards(!showAdditionalCards);
  };
   */

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
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
        <div className="slider-container">
          <div className="slider-main">
            <Slider {...sliderSettings}>
              {posts.length > 0 ? (
                posts.map((post) => (
                  <div className="slider-content">
                    <img src={post.avatar} class="slidePic" />
                    <div className="slider-title">
                      <h2>{post.title}</h2>
                    </div>
                    <div className="slider-subtitle">
                      <h3>{post.subtitle}</h3>
                    </div>
                    <Button className="button-mas-info" onClick={() => handleOpen(post._id)}>
                      ¡Más información!
                    </Button>
                  </div>  
                ))
              ) : (
                <p>No hay servicios</p>
              )}
            </Slider>
          </div>
        </div>
      </div>

      <div className="products1" id="products1">
        {/* <Service></Service> */}
        {/* <div className="cards">
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
        </div> */}
      </div>
      <div className="contact1" id="contact1"></div>

      <div className="footer"></div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {selectedPost && (
            <>
              {console.log(selectedPost)}
              <img
                src={selectedPost.avatar}
                alt={selectedPost.title}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {selectedPost.title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {selectedPost.subtitle}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {selectedPost.Description}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default MenuReact;
