import React from 'react';
import './items.css';

const Items = () => {
    return (
        <div className="app">
            <img src="images/icons/logo-maca.png" alt="Logo" width="110" height="90" />
            <br></br>
            <h1 className="title">As Melhores</h1>
            <div className="sub-header-text">Condições para você!</div>
            <br />
            <div className="icon-group">
                <img src="images/icons/icon-cartao.png" alt="Logo" width="110" height="90" />
            </div>
            <div className="text-container">
                <p className="large-text">PARCELAMENTO</p>
                <p className="large-description">Em até 18x no cartão</p>
            </div>
            <br />
            <div className="icon-group">
                <img src="images/icons/icon-selo.png" alt="Logo" width="110" height="100" />
            </div>
            <div className="text-container">
                <p className="large-text">GARANTIA</p>
                <p className="large-description">Total em todos os aparelhos</p>
            </div>
            <br />
            <div className="icon-group">
                <img src="images/icons/icon-cliente.png" alt="Logo" width="110" height="100" />
            </div>
            <div className="text-container">
                <p className="large-text">+8000</p>
                <p className="large-description">Clientes Satisfeitos</p>
            </div>
            <br />
            <div className="icon-group">
                <img src="images/icons/icon-assistencia.png" alt="Logo" width="110" height="90" />
            </div>
            <div className="text-container">
                <p className="large-text">ASSISTÊNCIA</p>
                <p className="large-description">Têcnica Especializada</p>
            </div>
            <br />
            <div className="icon-group">
                <img src="images/icons/icon-calendario.png" alt="Logo" width="110" height="90" />
            </div>
            <div className="text-container">
                <p className="large-text">+5 ANOS</p>
                <p className="large-description">Entregando qualidade e confiança</p>
            </div>
            <br />
            <div className="icon-group">
                <img src="images/icons/icon-calendario.png" alt="Logo" width="110" height="90" />
            </div>
            <div className="text-container">
                <p className="large-text">4 LOJAS</p>
                <p className="large-description">Físicas para melhor atende-lo</p>
            </div>
        </div>
    );
};

export default Items;
