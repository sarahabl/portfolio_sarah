import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Gradient from './assets/Gradients.svg'; // Importez votre gradient SVG

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
