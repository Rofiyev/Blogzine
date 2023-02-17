import React, { useContext } from 'react';
import { BsBookmarkStar, BsInfoCircle } from 'react-icons/bs';
import './Galery.css';
import img_1 from './image/img_1.jpg';
import img_5 from './image/img_2.jpg';
import img_4 from './image/img_3.jpg';
import img_2 from './image/img_4.jpg';
import img_3 from './image/img_5.jpg';
import fon_1 from './image/bg.jpg';
import fon_2 from './image/fon_1.jpg';
import fon_3 from './image/fon_2.jpg';
import fon_4 from './image/fon_3.jpg';
import fon_5 from './image/fon_4.jpg';
import NewCard from '../Components/NewCard/NewCard';
import ThemeContext from '../../Context/ThemeContext';

const fon = [fon_2, fon_3, fon_4, fon_5];
const userImg = [img_2, img_3, img_4, img_5];

export default function Galery({ data }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div id='galery' className={`container ${theme}`}>
      <h1><BsBookmarkStar />Last week top highlights</h1>
      <p>Check last weeks top highlights, news, stories and headline news</p>
      <div className="galery-container my-5 d-flex gap-4">
        <div className="page-1">
          <img id='fon' src={fon_1} alt="Rasm" />
          <div className="d-flex">
            <div className='circle_2 me-2'>
              <span>Business</span>
            </div>
            <span id='lg'><BsInfoCircle className='pe-2 icon' />Sponsored</span>
          </div>
          <h1 className='mt-2'>Never underestimate the <br /> influence of social media</h1>
          <div className="galery-info">
            <img src={img_1} alt="Img-1" />
            <span className='mx-4'>by Carolyn</span>
            <span className='me-4'>Jan 26,2022</span>
            <span>3min read</span>
          </div>
        </div>
        <div className="page-2 f-flex align-items-center">
          <NewCard theme={theme} data={data} fon={fon} userImg={userImg} width={'width_100'} />
        </div>
      </div>
    </div>
  )
}
