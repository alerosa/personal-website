import React, {dangerouslySetInnerHTML} from 'react';
import Section from '../../../common/Section';
import s from './Intro.css';

const Intro = ({title, subtitle, text, scrollDown, children}) =>
  <Section bgColor='#fff' txtColor="#4f4f4f" style={{minHeight: '112vh'}}>
    <div className={s.root}>
      <div className={s.titles}>
        <h1 className={s.title}>{title}</h1>
        <h2 className={s.subtitle}>{subtitle}</h2>
      </div>
      <div className={s.image}><img src="me.jpg"/></div>
      <div className={s.text} dangerouslySetInnerHTML={{ __html: text }}/>
      <div className={s.ctas}>
        <a href="#" className={s.anchorButton} onClick={scrollDown}>Continue to read my online resume</a>
        <span className={s.pdf}>or <a href="alessandro-rosa_resume.pdf">download the pdf</a></span>
      </div>
    </div>
  </Section>

export default Intro;
