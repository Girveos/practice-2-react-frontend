import React from 'react';
import '../styles/menu.scss';
import '../styles/flex.scss';

function FlexPage() {
  return (
    <div className="container">
      <div className="menu">
        <img className="uamLogo" src="../assets/images/Logos_UAM-08.png" alt="Logo UAM" />
        <button id="menu-toggle" className="menu-toggle">☰</button>
        <ul id="menu-list">
          <li><a href="#">Flexbox</a></li>
          <li><a href="./products">Products</a></li>
          <li><a href="./contact">Contact</a></li>
        </ul>
        <div className="avatar-container">
          <img src="../assets/images/avatar.png" className="avatar" alt="Foto de perfil" />
        </div>
      </div>
      <div className="content">
        <div className="flex-item1"></div>

        <div className="container2">
          <div className="flex-item2"></div>
          <div className="flex-item3"></div>
        </div>

        <div className="container3">
          <div className="flex-item4"></div>
          <div className="flex-item5"></div>
          <div className="flex-item6"></div>
        </div>

        <div className="containerIn">
          <div className="containerIn1">
            <div className="Colum"></div>
          </div>

          <div className="containerIn2">
            <div className="top"></div>

            <div className="midcontainer">
              <div className="mid1"></div>
              <div className="mid2"></div>
            </div>

            <div className="footer">
              <div className="foot1"></div>
              <div className="foot2"></div>
              <div className="foot3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default FlexPage;
