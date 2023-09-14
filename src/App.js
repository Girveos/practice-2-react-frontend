import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa los componentes
import './App.css'; // Estilos generales de la aplicación
import YoutubePage from './components/youtube/youtube';
import MenuReact from './components/menu/menu';
import CubeReact from './components/cube/cubo';
import FacebookComponent from './components/facebook/facebook';

function App() {
  return (
    <Router>
      <div className="app-container">
        <MenuReact />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/youtubePage" element={<YoutubePage />} />
          <Route path="/facebook" component={FacebookComponent} />
          {/* Agrega más rutas aquí si es necesario */}
        </Routes>
        <CubeReact />
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div>
      {/* Contenido de la página principal */}
    </div>
  );
}

export default App;
