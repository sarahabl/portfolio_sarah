import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Gradient from './assets/Gradients.svg'; // Importez votre gradient SVG

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Ajout du gradient */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          right: '0',
          width: '100%', // Ajustement de la largeur si nécessaire
          height: '1684.07px', // Définir la hauteur du gradient
          backgroundImage: `url(${Gradient})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center right',
          backgroundSize: 'contain',
          transform: 'translateY(-50%)',
          zIndex: '-1',
          pointerEvents: 'none',
        }}
      ></div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
