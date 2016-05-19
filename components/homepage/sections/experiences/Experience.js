import React, {PropTypes} from 'react';
import s from './Experience.css';

const Experience = ({title, subtitle, period, desc}) => {
  return (
    <article className={s.root}>
      <div className={s.titles}>
        <h1 className={s.title}>{title}</h1>
        <h2 className={s.subtitle} dangerouslySetInnerHTML={{__html: subtitle}}/>
        <h3 className={s.period}>{period}</h3>
      </div>
      <div className={s.desc} dangerouslySetInnerHTML={{__html: desc}}/>
    </article>
  );
};

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Experience;
