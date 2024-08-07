import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';


function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
