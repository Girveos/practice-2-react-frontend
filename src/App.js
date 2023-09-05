import React from 'react';
import './App.css'; // Estilos generales de la aplicación
import MenuReact from './components/menu/menu';
import CubeReact from './components/cube/cubo';

function App() {
  return (
    <div className="app-container">
      {/* Otros componentes y contenido de la aplicación */}
      <MenuReact/>
      <CubeReact/>
    </div>
  );
}

export default App;
