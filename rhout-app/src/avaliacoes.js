import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './avaliacoes.css';
import { Navigation, Autoplay } from 'swiper/modules';

function Avaliacoes() {
    return (
        <div className="app">
            <div className="content">
                <div className="text-container">
                    <div className="header-text large-text">AVALIAÇÕES</div>
                    <div className="stars">★★★★★</div> {/* Coloquei as estrelas em um div para facilitar a centralização */}
                </div>
                <div className="carousel-container">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation
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
            </div>

        </div>
    );
}


export default Avaliacoes;
