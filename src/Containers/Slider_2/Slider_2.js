import React, {useContext} from 'react';
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import './Slider_2.css';
import img_1 from './Image/img_1.jpg';
import img_2 from './Image/img_2.jpg';
import img_3 from './Image/img_3.jpg';
import img_4 from './Image/img_4.jpg';
import img_5 from './Image/img_5.jpg';
import ThemeContext from '../../Context/ThemeContext.js';

const img = [img_1, img_2, img_3, img_4, img_5];

export default function Slider_2({ data }) {
  const {theme} = useContext(ThemeContext);
  return (
    <div id='slider_2' className={`container container-slider-2 my-5 ${theme}`}>
      <div className="info d-flex align-items-center justify-content-between">
        <h2 className='mb-4'>Trending topics</h2>
        <a href="#">View all categoria</a>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={`mySwiper ${theme}`}
      >
        {data.slider.map((item, i) => {
          return (
            <SwiperSlide key={i} className="slideCard">
              <img src={img[i]} alt="Rasm" />
              <span>{item.span}</span>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
