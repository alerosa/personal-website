import React from 'react';
import TitleBall from './TitleBall';
import s from './Section.css';

const Section = ({bgColor, txtColor, style, children}) => {
  style = Object.assign({color: txtColor, backgroundColor: bgColor}, style);

  return (
    <section className={s.root} style={style}>
      <div className={s.container} style={style.container}>{children}</div>
    </section>
  );
};

export default Section;
