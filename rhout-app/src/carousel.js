"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './carousel.css';

import { Navigation, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const IphoneCarousel = () => {
  const navigate = useNavigate();

  // Função para redirecionar para a página de consultores
  const navigateToConsultores = () => {
    navigate('/consultores'); // Redireciona para a rota de consultores
  };

  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone16promax.png" alt="Iphone 16 Pro Max" className="carousel-image" />
            <div className="slide-text">Iphone 16 Pro Max</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone16pro.png" alt="Iphone 16 Pro" className="carousel-image" />
            <div className="slide-text">Iphone 16 Pro</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone16plus.png" alt="Iphone 16 Plus" className="carousel-image" />
            <div className="slide-text">Iphone 16 Plus</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone16.png" alt="Iphone 16" className="carousel-image" />
            <div className="slide-text">Iphone 16</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone15promax.png" alt="Iphone 15 Pro Max" className="carousel-image" />
            <div className="slide-text">Iphone 15 Pro Max</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone15pro.png" alt="Iphone 15 Pro" className="carousel-image" />
            <div className="slide-text">Iphone 15 Pro</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone15plus.png" alt="Iphone 15 Plus" className="carousel-image" />
            <div className="slide-text">Iphone 15 Plus</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone15.png" alt="Iphone 15" className="carousel-image" />
            <div className="slide-text">Iphone 15</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone14promax.png" alt="Iphone 14 Pro Max" className="carousel-image" />
            <div className="slide-text">Iphone 14 Pro Max</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone14pro.png" alt="Iphone 14 Pro" className="carousel-image" />
            <div className="slide-text">Iphone 14 Pro</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone14plus.png" alt="Iphone 14 Plus" className="carousel-image" />
            <div className="slide-text">Iphone 14 Plus</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone14.png" alt="Iphone 14" className="carousel-image" />
            <div className="slide-text">Iphone 14</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone13promax.png" alt="Iphone 13 Pro Max" className="carousel-image" />
            <div className="slide-text">Iphone 13 Pro Max</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone13pro.png" alt="Iphone 13 Pro" className="carousel-image" />
            <div className="slide-text">Iphone 13 Pro</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone13.png" alt="Iphone 13" className="carousel-image" />
            <div className="slide-text">Iphone 13</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone12promax.png" alt="Iphone 12 Pro Max" className="carousel-image" />
            <div className="slide-text">Iphone 12 Pro Max</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone12pro.png" alt="Iphone 12 Pro" className="carousel-image" />
            <div className="slide-text">Iphone 12 Pro</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone12.png" alt="Iphone 12" className="carousel-image" />
            <div className="slide-text">Iphone 12</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone11promax.png" alt="Iphone 11 Pro Max" className="carousel-image" />
            <div className="slide-text">Iphone 11 Pro Max</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone11pro.png" alt="Iphone 11 Pro" className="carousel-image" />
            <div className="slide-text">Iphone 11 Pro</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone11.png" alt="Iphone 11" className="carousel-image" />
            <div className="slide-text">Iphone 11</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphonexsmax.png" alt="Iphone XS Max" className="carousel-image" />
            <div className="slide-text">Iphone XS Max</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphonexs.png" alt="Iphone XS" className="carousel-image" />
            <div className="slide-text">Iphone XS</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphonexr.png" alt="Iphone XR" className="carousel-image" />
            <div className="slide-text">Iphone XR</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphonex.png" alt="Iphone X" className="carousel-image" />
            <div className="slide-text">Iphone X</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone8plus.png" alt="Iphone 8 Plus" className="carousel-image" />
            <div className="slide-text">Iphone 8 Plus</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/jbl.png" alt="Linha JBL" className="carousel-image" />
            <div className="slide-text">Linha JBL</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/ipad.png" alt="Ipad" className="carousel-image" />
            <div className="slide-text">Ipad's</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/smart.png" alt="SmartWatch" className="carousel-image" />
            <div className="slide-text">Apple Watch</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/macbook.png" alt="MacBook" className="carousel-image" />
            <div className="slide-text">MacBook</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/airtag.png" alt="Airtag" className="carousel-image" />
            <div className="slide-text">Airtag</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/fones.png" alt="Fones" className="carousel-image" />
            <div className="slide-text">Fones</div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="button-container">
        <button className="rounded-button" onClick={navigateToConsultores}>
          Falar com Consultor
        </button>
      </div>
    </div>
  );
};

export default IphoneCarousel;
