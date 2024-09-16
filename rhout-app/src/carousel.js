import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; 
import './carousel.css'; 

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const IphoneCarousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }} 
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphones/iphone16-pro-max.png" alt="iPhone 1" className="carousel-image" />
            <div className="slide-text">iPhone 16 Pro Max</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphone2.jpg" alt="iPhone 2" className="carousel-image" />
            <div className="slide-text">iPhone 13 Pro</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphone3.jpg" alt="iPhone 3" className="carousel-image" />
            <div className="slide-text">iPhone 12 Pro</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/iphone4.jpg" alt="iPhone 4" className="carousel-image" />
            <div className="slide-text">iPhone 11 Pro</div>
          </div>
        </SwiperSlide>
        {/* Adicione mais slides conforme necessário */}
      </Swiper>
    </div>
  );
};

export default IphoneCarousel;
