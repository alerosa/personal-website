import React from 'react';
import s from './Contact.css';

const Contact = ({icon, label, link}) => {
  return <a className={s[icon]} href={link}>{label}</a>;
}

export default Contact;
