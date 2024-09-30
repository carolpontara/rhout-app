import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css'; // Certifique-se de que esse arquivo está correto e sendo importado.
import IphoneCarousel from './carousel';
import Items from './items';
import Clientes from './clientes';
import Avaliacoes from './avaliacoes';
import Consultores from './consultores';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Router>
            <div className="app">
                <header className="app-header">
                    <img 
                        className="header-logo" 
                        src="images/rhout-logo-mini.png" 
                        alt="Logo Rhout Store" 
                        onClick={() => window.location.href = '/'} 
                        style={{ cursor: 'pointer' }}
                    />
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <section className="content">
                                    <div className="header-text">A melhor Loja de</div>
                                    <div className="sub-header-text">iPhones Do Brasil</div>
                                </section>

                                {/* Verifique se os componentes estão corretamente importados e não apresentam erros */}
                                <IphoneCarousel />
                                <Items />
                                <Clientes />
                                <Avaliacoes />
                                
                                {/* Botão para abrir o modal */}
                                <button onClick={openModal}>Abrir Modal</button>

                                {/* Exibição condicional do modal */}
                                {isModalOpen && (
                                    <div className="modal">
                                        <div className="modal-content">
                                            <h2>Modal Aberto</h2>
                                            <button onClick={closeModal}>Fechar Modal</button>
                                        </div>
                                    </div>
                                )}
                            </>
                        } />

                        {/* Página de Consultores */}
                        <Route path="/consultores" element={<Consultores />} />

                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
