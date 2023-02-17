import React, {useContext} from 'react';
import logo from './logo.svg';
import './Footer.css';
import ThemeContext from '../../Context/ThemeContext';
import { AiFillTwitterSquare, AiFillFacebook, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const icons = [<AiFillFacebook className='socialIcon bgBlue_1' />, <AiFillTwitterSquare className='socialIcon bgBlue_2' />, <AiFillLinkedin className='socialIcon bgBlue_3' />, <AiFillYoutube className='socialIcon bgCrimson' />,]

export default function Footer({ data }) {
  const {theme} = useContext(ThemeContext)
  return (
    <div id='container' className={`container h-50 pt-5 d-flex mb-0 ${theme}`}>
      <div className="col-md-4">
        <img src={logo} alt="" />
        <p className='mt-3'>The next-generation blog, news, and magazine theme for you to start sharing your stories today! This Bootstrap 5 based theme is ideal for all types of sites that deliver the news.</p>
        <p>&copy;2022 Webestica. All rights reserved</p>
      </div>
      <div className="col-md-3 d-flex flex-column">
        <h4>Navigation</h4>
        <div className="d-flex">
          <ul id='footerItem' className='d-flex flex-column fw-bold me-5'>
            {
              data.footer_1.map((item, i) => <li key={i} className='mx-1 my-1'>{item}</li>)
            }
          </ul>
          <ul id='footerItem' className='d-flex flex-column fw-bold'>
            {
              data.footer_2.map((item, i) => <li key={i} className={`mx-1 my-1 ${item.class}`}>{item.text}</li>)
            }
          </ul>
        </div>
      </div>
      <div className="col-md-3">
        <h4>Browse by Tag</h4>
        <div className="items">
          {
            data.footer_3.map((link, i) => <a key={i} href='#' className={`fw ${link.class} mx-1 my-1`}>{link.text}</a>)
          }
        </div>
      </div>
      <div className="col-md-2">
        <h4>Our Social handles</h4>
        <div className="row d-flex flex-column h-50">
          {
            data.footer_4.map((item, i) => <a key={i} href='#' id='socialIcon'>{icons[i]} {item}</a>)
          }
        </div>
      </div>
    </div >
  )
}
