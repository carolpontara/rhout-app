import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './avaliacoes.css';
import { Navigation, Autoplay } from 'swiper/modules';

function Avaliacoes() {
    const navigateToAnotherScreen = () => {
        window.open('/outra-tela', '_blank');
    };
    return (
        <div className="app">
            <div className="content">
                <div className="text-container">
                    <div className="header-text large-text">AVALIAÇÕES</div>
                    <div className="stars">★★★★★</div>
                </div>
                <div className="carousel-container">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        autoplay={{ delay: 2000 }}
                        modules={[Navigation, Autoplay]}
                    >
                        {[...Array(8).keys()].map((index) => (
                            <SwiperSlide key={index}>
                                <div className="slide-content">
                                    <img src={`images/Avaliacoes/avaliacao${index + 1}.png`} alt={`Avaliacao ${index + 1}`} className="carousel-image-avalia" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <br />
                </div>
                <div className="store-container">
                    <div className="text-container">
                        <div className="header-text large-text">📍LOJAS</div>
                    </div>
                    <h3 className="store-name">Loja Pão de Açúcar</h3>
                    <br></br>

                    <div className="map-container">
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.384032250699!2d-47.32900598501792!3d-23.243158984074055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8f8e25a5e8351%3A0x4775f6f56dc3c7b3!2sAv.%20Luiz%20Saldanha%20Rodrigues%2C%201591%20-%20Vila%20Santos%20Dumont%2C%20Ourinhos%20-%20SP%2C%2019907-510!5e0!3m2!1spt-BR!2sbr!4v1695597140043!5m2!1spt-BR!2sbr"
                            width="400"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                    <br></br>
                    <h3 className="store-name">Loja Ourinhos 2</h3>
                    <br></br>
                    <div className="map-container">
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.376902107132!2d-49.88723778492586!3d-22.99329168457464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8f92c1a5d2799%3A0x9331bf1a162c8a3e!2sR.%20Vicente%20Ernesto%20de%20Lucca%2C%20437%20-%20Res.%20Vandelena%20Moraes%20Freire%2C%20Ourinhos%20-%20SP%2C%2019915-580!5e0!3m2!1spt-BR!2sbr!4v1695672858572!5m2!1spt-BR!2sbr"
                            width="400"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                    <br></br>
                    <h3 className="store-name">Loja Ourinhos 3</h3>
                    <br></br>
                    <div className="map-container">
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.411479240279!2d-49.876256285017904!3d-22.981036684580524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8f9208f5d1a41%3A0x69a1b2b3a1caa0e6!2sR.%20Cardoso%20Ribeiro%2C%20285%20-%20Centro%2C%20Ourinhos%20-%20SP%2C%2019900-100!5e0!3m2!1spt-BR!2sbr!4v1695673218081!5m2!1spt-BR!2sbr"
                            width="400"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                    <br></br>
                    <h3 className="store-name">Loja Santa Cruz</h3>
                    <br></br>
                    <div className="map-container">
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.5792012909767!2d-49.63293388503638!3d-22.896366685012837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c1035588001e4b%3A0x5fdd4522d5f7b71b!2sR.%20Mal.%20Bitencourt%2C%20658%20-%20Vila%20Fabiano%2C%20Santa%20Cruz%20do%20Rio%20Pardo%20-%20SP%2C%2018900-000!5e0!3m2!1spt-BR!2sbr!4v1695673558492!5m2!1spt-BR!2sbr"
                            width="400"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button
                    className="rounded-button"
                    onClick={navigateToAnotherScreen}
                >
                    GARANTA SEU IPHONE                </button>
            </div>
            <br></br>
            <div className="text-container">
                <p className="large-description">Vem para a #RHOUT!</p>
            </div>
            <br></br>
        </div>
    );
}


export default Avaliacoes;