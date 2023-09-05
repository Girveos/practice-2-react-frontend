import React from 'react';
import '../styles/menu.scss';
import '../styles/products.scss';

function ProductsPage() {
  return (
    <div className="container">
      <div className="menu">
        <img className="uamLogo" src="../assets/images/Logos_UAM-08.png" alt="Logo UAM" />
        <button id="menu-toggle" className="menu-toggle">☰</button>
        <ul id="menu-list">
          <li><a href="./flex">Flexbox</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="./contact">Contact</a></li>
        </ul>
        <div className="avatar-container">
          <img src="../assets/images/avatar.png" className="avatar" alt="Foto de perfil" />
        </div>
      </div>
      <div className="content">
        <h1>Products works!</h1>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default ProductsPage;
