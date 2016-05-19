import React, {PropTypes} from 'react';
import s from './ExperiencesList.css';

const ExperiencesList = ({title, icon, children}) => {
  return (
    <div className={s.root}>
      <h1 className={s[icon]}>{title}</h1>
      {children.map( (child, i) => <div key={i} className={s.entry}>{child}</div>)}
    </div>
  )
}

export default ExperiencesList;
