import React from 'react';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "./Carousel.css"; // Add the required Swiper CSS
import LeftNavigationButton from './LeftNavigationButton';
import RightNavigationButton from './RightNavigationButton';

const Carousel = ({ data = [], renderItem, slidesPerView, spaceBetween }) => {

  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={spaceBetween || 10}
        slidesPerView={slidesPerView || 3}
        navigation={false}
        modules={[Navigation]}
        breakpoints={{
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          }
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {renderItem(item)} {/* Use a custom renderItem function to customize how each item appears */}
          </SwiperSlide>
        ))}
        <LeftNavigationButton />
        <RightNavigationButton />
      </Swiper>
      {/* Custom Left and Right Navigation Buttons */}
    </div>
  );
};

export default Carousel;
