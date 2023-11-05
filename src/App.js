import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CubeReact from './components/cube/cubo.js';
import FacebookPage from './components/facebook/facebook';
import WhatsAppPage from './components/whatsapp/whatsapp';
import YoutubePage from './components/youtube/youtube';
import MenuReact from './components/menu/MenuReact';
import TermsAndConditionsPage from './components/terms/terms'
import TranslucentMenu from './components/translucentMenu/translucentManu.js'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                 <MenuReact />
                <CubeReact /> 
                {/* <TranslucentMenu /> */}
              </>
            }
          />
          <Route path="/facebook" element={<FacebookPage />} />
          <Route path="/whatsapp" element={<WhatsAppPage />} />
          <Route path="/youtube" element={<YoutubePage />} />
          <Route path="/terms" element={<TermsAndConditionsPage />} />
          {/* Otras rutas aquí */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
