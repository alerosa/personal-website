import React from 'react';
import Section from '../common/Section';

import s from './Footer.css';
const date = new Date();

const Footer = () =>
  <footer className={s.root}>
    <Section bgColor='#333' txtColor="#fff" style={{container: {paddingTop: 0, paddingBottom: 0}}}>
      <ul className={s.list}>
        <li className={s.entry}>Alessandro Rosa &copy; {date.getFullYear()}</li>
        <li className={s.entry}>made with
          {' '}<a href="https://reactjs.org" target="_blank" rel="no-follow">React</a>,
          {' '}<a href="https://github.com/css-modules/css-modules" target="_blank" rel="no-follow">CSS Modules</a>,
          {' '}<a href="http://ionicons.com/" target="_blank" rel="no-follow">Ionic Icons</a>,
          {' '}<a href="http://ionicons.com/" target="_blank" rel="no-follow">Devicons</a>
        </li>
      </ul>
    </Section>
  </footer>

export default Footer;
