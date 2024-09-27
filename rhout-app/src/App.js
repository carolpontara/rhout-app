import React from 'react';
import './index.css';
import IphoneCarousel from './carousel';
import Items from './items';
import Clientes from './clientes';
import Avaliacoes from './avaliacoes';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <img className="header-logo" src="images/rhout-logo-mini.png" alt="Logo" />
            </header>
            <div className="content">
                <div className="header-text">A melhor Loja de</div>
                <div className="sub-header-text">iPhones Do Brasil</div>
            </div>
            <IphoneCarousel />
            <Items />
            <Clientes />
            <Avaliacoes />
        </div>
    );
}

export default App;
