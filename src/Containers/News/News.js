import React, {useContext} from 'react';
import './News.css';
import { IoGameControllerOutline } from 'react-icons/io5';
import img_1 from './image/img_1.jpg';
import img_2 from './image/img_2.jpg';
import user1 from './image/user_1.jpg';
import user2 from './image/user_2.jpg';
import ThemeContext from '../../Context/ThemeContext';

const fon = [img_1, img_2];
const userImg = [user1, user2];

export default function News({ data }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div id='news' className={`container my-3 ${theme}`}>
      <h1><IoGameControllerOutline /> Sports update</h1>
      <p>Get the latest sports news and updates from football, tennis, formula one, cricket, NBA, and golf with live scores and stats</p>
      <div className="d-flex align-items-center gap-4 my-5 justify-content-center">
        {
          data.new.map((item, i) => {
            return (
              <div key={i} className="col-md-6 page">
                <div className="image">
                  <img src={fon[i]} alt="Fon" />
                </div>
                <div className="title">
                  <div className={`d-flex align-items-center infoTitle ${item.spanClass}`}>
                    <div className='circleTitle'></div>
                    <span>{item.span}</span>
                  </div>
                  <h1>{item.heading}</h1>
                  <ul className='d-flex align-items-center gap-4'>
                    <img src={userImg[i]} alt="User" />
                    <li>{item.list1}</li>
                    <li>{item.list2}</li>
                    <li>{item.list3}</li>
                  </ul>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
