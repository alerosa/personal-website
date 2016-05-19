import React, {PropTypes} from 'react';
import Section from '../../../common/Section';
import TitleBall from '../../../common/TitleBall';
import Contact from './Contact';
import colors from '../../../common-styles/Colors.css';
import s from './Contacts.css';

const Contacts = ({contacts}) => {
  return (
    <Section bgColor={colors.contacts} txtColor={colors.lightText}>
      <div className={s.title}>
        <TitleBall title="Contacts"/>
      </div>
      <ul className={s.list}>
        {contacts.map( (c, i) => <li key={i} className={s.entry}><Contact icon={c.icon} label={c.label} link={c.link}/></li>)}
      </ul>
    </Section>
  );
};

export default Contacts;
