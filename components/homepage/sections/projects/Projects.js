import React from 'react';
import Section from '../../../common/Section';
import TitleBall from '../../../common/TitleBall';
import Project from './Project';
import colors from '../../../common-styles/Colors.css';
import s from  './Projects.css';

const Projects = ({projects}) => {
  return (
    <Section bgColor={colors.greyBg} txtColor={colors.greyText}>
      <div className={s.title}>
        <TitleBall title="Projects"/>
      </div>
      <div className={s.root}>
        {projects.map( (p, i) =>
          <div key={i} className={s.entry}>
            <Project title={p.title} client={p.client} role={p.role} desc={p.desc}/>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Projects;
