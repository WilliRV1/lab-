import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Laboratory from './pages/Laboratory';
import Servicios from './pages/Servicios';
import Tecnica from './pages/Tecnica';
import Logistica from './pages/Logistica';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Laboratory />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/tecnica" element={<Tecnica />} />
            <Route path="/logistica" element={<Logistica />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
