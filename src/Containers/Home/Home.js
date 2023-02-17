import './Home.css';
import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import person_1 from './image/person.jpg';
import person_2 from './image/person-2.jpg';
import ThemeContext from '../../Context/ThemeContext';
import { Container } from 'react-bootstrap';

export default function Home({ data }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Container id='home' className={`${theme}`}>
      <Swiper id='mySwiper' className="mySwiper">
        {
          data.slider.map((data, i) => {
            return (
              <SwiperSlide key={i} className={`swiper-slide slide-${data.id}`}>
                <div className="content">
                  <span className={`circle ${data.spanClass}`} ><span id='circle-elm'></span>{data.spanInfo}</span>
                  <h1>{data.heading_1}<br />{data.heading_2}<br />{data.heading_3}</h1>
                  <p className='paragh'>{data.paragraph}</p>
                  <ul className='d-flex align-items-center gap-3'>
                    <img src={person_1} alt="Person" />
                    <span>{data.spanFooter_1}</span>
                    <li className='me-3'>{data.spanFooter_2}</li>
                    <li>{data.spanFooter_3}</li>
                  </ul>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </Container>
  )
}
