import React from 'react';
import './NewCrad.css';

export default function NewCrad({ data, userImg, fon, theme, width }) {
  return (
    <>
      {
        data.card.map((item, i) => {
          return (
            <div className={`col-md-6 d-flex my-2 cardItem ${width}`}>
              <img id='oboi' src={fon[i]} alt="Fon" />
              <div className="infoCrad ms-2">
                <div className={`d-flex align-items-center justify-content-center bg ${item.spanBg}`}>
                  <div id='circle' className='me-2'></div>
                  <span>{item.spanInfo}</span>
                </div>
                <h3>{item.heading}</h3>
                <ul id='cardsDiv' className={`d-flex align-items-center gap-3 ${theme}`}>
                  <img id='userImg' src={userImg[i]} alt="user" />
                  <span className='me-3 fw-bold'>{item.ulSpan}</span>
                  <li>{item.ulList}</li>
                </ul>
              </div>
            </div>
          )
        })
      }
    </>
  )
}
