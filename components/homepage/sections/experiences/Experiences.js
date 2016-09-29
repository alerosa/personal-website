import React, {PropTypes} from 'react';
import Section from '../../../common/Section';
import TitleBall from '../../../common/TitleBall';
import ExperiencesList from './ExperiencesList';
import Experience from './Experience';
import Education from './Education';
import Career from './Career';
import colors from '../../../common-styles/Colors.css';
import s from './Experiences.css';

const Experiences = ({careers, educations}) => {
  return (
    <Section bgColor={colors.lightBg} txtColor={colors.greyText}>
      <div className={s.title}>
        <TitleBall title="Professional Experiences"/>
      </div>
      <div className={s.experiences}>
        <ExperiencesList>
          {careers.map( (c, i) => <Career key={i} role={c.role} company={c.company} period={c.period} desc={c.desc}/>)}
        </ExperiencesList>
      </div>
    </Section>
  );
};

export default Experiences;
