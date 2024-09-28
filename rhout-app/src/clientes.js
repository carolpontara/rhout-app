import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './carousel.css';
import { Navigation, Autoplay } from 'swiper/modules';

function Clientes() {
    const navigateToAnotherScreen = () => {
        window.location.href = '/consultores';  // Redireciona para a URL desejada na mesma janela
    };
    return (
        <div className="app">
            <div className="content">
                <div className="header-text">NOSSOS CLIENTES</div>
                <div className="carousel-container">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 2000 }}
                        modules={[Navigation, Autoplay]}
                    >
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="images/clientes/cliente1.png" alt="Cliente 1" className="carousel-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="images/clientes/cliente2.png" alt="Cliente 2" className="carousel-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="images/clientes/cliente3.png" alt="Cliente 3" className="carousel-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="images/clientes/cliente4.png" alt="Cliente 4" className="carousel-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="images/clientes/cliente5.png" alt="Cliente 5" className="carousel-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="images/clientes/cliente6.png" alt="Cliente 6" className="carousel-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="images/clientes/cliente7.png" alt="Cliente 7" className="carousel-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="images/clientes/cliente8.png" alt="Cliente 8" className="carousel-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="images/clientes/cliente9.png" alt="Cliente 9" className="carousel-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="images/clientes/cliente10.png" alt="Cliente 10" className="carousel-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="images/clientes/cliente11.png" alt="Cliente 11" className="carousel-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="images/clientes/cliente12.png" alt="Cliente 12" className="carousel-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="images/clientes/cliente13.png" alt="Cliente 13" className="carousel-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="images/clientes/cliente14.png" alt="Cliente 14" className="carousel-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="images/clientes/cliente15.png" alt="Cliente 15" className="carousel-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="images/clientes/cliente16.png" alt="Cliente 16" className="carousel-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="images/clientes/cliente17.png" alt="Cliente 17" className="carousel-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="images/clientes/cliente18.png" alt="Cliente 18" className="carousel-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="images/clientes/cliente19.png" alt="Cliente 19" className="carousel-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="images/clientes/cliente20.png" alt="Cliente 20" className="carousel-image" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="button-container">
                        <button
                            className="rounded-button"
                            onClick={navigateToAnotherScreen}
                        >
                            ADQUIRA SEU IPHONE
                        </button>
                    </div>
                    
                    <br></br>
                </div>
            </div>
        </div>
    );
}

export default Clientes;
