import React, {useContext} from 'react';
import { BsMegaphone } from 'react-icons/bs';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import footer_img_1 from './Image/carusel-1 info img-1.jpg';
import footer_img_2 from './Image/carusel-1 info img-2.jpg';
import footer_img_3 from './Image/carusel-1 info img-3.jpg';
import footer_img_4 from './Image/carusel-1 info img-2.jpg';
import footer_img_5 from './Image/carusel-1 info img-1.jpg';
import './Slider_1.css';
import img from './Image/adv-3.png';
import ThemeContext from '../../Context/ThemeContext';

const sliderImg = [footer_img_1, footer_img_2, footer_img_3, footer_img_4, footer_img_5, footer_img_2];

export default function Slider_1({ data }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div id='slider_1' className={`container mt-3 ${theme}`} >
      <h1>< BsMegaphone /> Today's top highlights</h1>
      <p>Latest breaking news, pictures, videos, and special reports</p>
      <div className="slider-container my-1">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          autoplay={{
            delay: 1300,
            disableOnInteraction: false,
          }}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper mt-1"
          id='mySwiper_2'
        >
          {
            data.slider.map((slideCard, i) => {
              return (
                <SwiperSlide key={i} className="slider-Card d-flex flex-column">
                  <div className={`image image_${slideCard.id}`}>
                    <div className={`img-info ${slideCard.bg}`}>
                      <div></div>
                      <span>{slideCard.spanInfo}</span>
                    </div>
                  </div>
                  <div className="info mt-1">
                    <h3>{slideCard.heading_3}</h3>
                    <div className="card-footer gap-3">
                      <img className='slider-footer-img' src={sliderImg[i]} alt="img" />
                      <span className='me-3 slider-footer-info_1'>{slideCard.footer_info_1}</span>
                      <span className='slider-footer-info_2'>{slideCard.footer_info_2}</span>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
      <img id='adv' className='my-5' src={img} alt="Adv" />
    </div>
  )
}
