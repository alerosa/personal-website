import React from 'react';
import s from './TitleBall.css';

const TitleBall = ({title, subTitle, style}) =>
  <div className={s.root} style={style}>
    <div className={s.container}>
      <h1 className={s.title}>{title}</h1>
      <h2 className={s.subtitle}>{subTitle}</h2>
    </div>
  </div>

export default TitleBall;
