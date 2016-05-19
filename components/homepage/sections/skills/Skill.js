import React, {PropTypes} from 'react';
import s from './Skill.css';

const Skill = ({name, level}) => {
  return (
    <div className={s.root}>
      <span className={s.name}>{name}</span>
      <div className={s.dots}>
        {[...Array(5)].map((item, i) =>
          (parseInt(level, 10) > parseInt(i, 10)) ? <span key={i} className={s.fulldot}></span> : <span key={i} className={s.emptydot}></span>)}
      </div>
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired
};

export default Skill;
