import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Funcionalidades from './pages/Funcionalidades';
import Solucoes from './pages/Solucoes';
import Planos from './pages/Planos';
import Contato from './pages/Contato';
import ChatWidget from './components/ChatWidget';
import Sobre from './pages/Sobre';
import Login from './pages/Login';

import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <ScrollToTop />
            <div className="min-h-screen relative">
                <div className="fixed inset-0 z-[-1] pointer-events-none" style={{
                    background: `
                        radial-gradient(circle at 10% 20%, rgba(0, 146, 209, 0.2) 0%, transparent 40%),
                        radial-gradient(circle at 90% 80%, rgba(0, 146, 209, 0.1) 0%, transparent 40%)
                    `
                }} />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/funcionalidades" element={<Funcionalidades />} />
                    <Route path="/solucoes" element={<Solucoes />} />
                    <Route path="/planos" element={<Planos />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <ChatWidget />
            </div>
        </Router>
    );
}

export default App;
