import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import IphoneCarousel from './carousel';
import Items from './items';
import Clientes from './clientes';
import Avaliacoes from './avaliacoes';
import Consultores from './consultores';

function App() {
    // Função para redirecionar para a página inicial
    const goToHomePage = () => {
        window.location.href = 'http://localhost:3000';
    };

    return (
        <Router>
            <div className="app">
                <header className="app-header">
                    <img 
                        className="header-logo" 
                        src="images/rhout-logo-mini.png" 
                        alt="Logo Rhout Store" 
                        onClick={goToHomePage} // Adiciona o evento de clique
                        style={{ cursor: 'pointer' }} // Estilo de cursor para indicar que é clicável
                    />
                </header>
                <main>
                    <Routes>
                        {/* Definindo a rota da página inicial */}
                        <Route path="/" element={
                            <>
                                <section className="content">
                                    <div className="header-text">A melhor Loja de</div>
                                    <div className="sub-header-text">iPhones Do Brasil</div>
                                </section>
                                <IphoneCarousel />
                                <Items />
                                <Clientes />
                                <Avaliacoes />
                            </>
                        } />

                        {/* Definindo a rota para a página de Consultores */}
                        <Route path="/consultores" element={<Consultores />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
