import React from 'react';
import s from './Project.css';

const Project = ({title, client, role, desc}) => {
  return (
    <article className={s.root}>
      <h1 className={s.title}>{title + ' '}
        <div className={s.client}> for <span href="" dangerouslySetInnerHTML={{__html: client}}/></div>
      </h1>
      <h2 className={s.role}>{role}</h2>
      <div className={s.desc} dangerouslySetInnerHTML={{__html: desc}}/>
    </article>
  );
};

Project.propTypes = {
  title: React.PropTypes.string.isRequired,
  client: React.PropTypes.string.isRequired,
  role: React.PropTypes.string.isRequired,
  desc: React.PropTypes.string.isRequired,
};

export default Project;
