import React, { useState, useRef } from 'react';
import './cubo.scss'; // Importa los estilos de SCSS
import youtube from '../../assets/images/youtube-168-svgrepo-com.svg'
import facebook from '../../assets/images/facebook-svgrepo-com.svg'
import whatsapp from '../../assets/images/whatsapp-svgrepo-com.svg'
function CubeReact() {
  const cubeRef = useRef(null);
  const optionsContainerRef = useRef(null);
  const option1Ref = useRef(null);
  const option2Ref = useRef(null);
  const option3Ref = useRef(null);

  /* Funcion que detiene y reactiva el movimiento del cubo */
  let animationPaused = false;

  const handleCubeClick = () => {
    console.log('Di click en el cubo');
    const cube = cubeRef.current;
    const optionsContainer = optionsContainerRef.current;

    if (!animationPaused) {
      console.log('Animacion pausada');
      cube.style.animationPlayState = 'paused';
      optionsContainer.style.display = 'flex';
      optionsContainer.style.flexDirection = 'column';
      animationPaused = true;
      setTimeout(() => {
        cube.style.animationPlayState = 'running';
        optionsContainer.style.display = 'none';
        animationPaused = false;
      }, 5000);
    } else {
      cube.style.animationPlayState = 'running';
      optionsContainer.style.display = 'none';
      animationPaused = false;
    }
  };

  /* Función para ver páginas */
  const handleOptionClick = (page) => {
    console.log('Di click en el cubo');
    window.location.href = `../pages/${page}.html`;
  };

  return (
    <div className="loader">
      <div className="cube" id="animatedCube" onClick={handleCubeClick} ref={cubeRef}>
        <div className="front"></div>
        <div className="back"></div>
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="right"></div>
        <div className="left"></div>
      </div>
      <div className="optionsContainer" id="options" ref={optionsContainerRef}>
        <div className="cube1" id="option1" onClick={() => handleOptionClick('twitter')} ref={option1Ref}>
          <div className="front">
          <a
            href="https://www.tiktok.com/"
            rel="noreferrer"
            target="_blank"
            className="transition text-grey hover:hover:text-blue-500"
          >
          <img src={facebook} className="footer__icon-img-large-whatsapp" />
        </a>
          </div>
          <div className="back"></div>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="right"></div>
          <div className="left"></div>
        </div>
        <div className="cube2" id="option2" onClick={() => handleOptionClick('facebook')} ref={option2Ref}>
          <div className="front">
          <a
            href="https://www.tiktok.com/"
            rel="noreferrer"
            target="_blank"
            className="transition text-grey hover:hover:text-blue-500"
          >
          <img src={whatsapp} className="footer__icon-img-large-whatsapp" />
        </a>
          </div>
          <div className="back"></div>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="right"></div>
          <div className="left"></div>
        </div>
        <div className="cube3" id="option3" onClick={() => handleOptionClick('linkedin')} ref={option3Ref}>
          <div className="front">
          <a
            href="https://www.tiktok.com/"
            rel="noreferrer"
            target="_blank"
            className="transition text-grey hover:hover:text-blue-500"
          >
          <img src={youtube} className="footer__icon-img-large-whatsapp" />
        </a>
          </div>
          <div className="back"></div>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="right"></div>
          <div className="left"></div>
        </div>
      </div>
    </div>
  );
}

export default CubeReact;
