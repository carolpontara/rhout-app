import React from 'react';
import './index.css';
import IphoneCarousel from './carousel';

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
        </div>
    );
}

export default App;
