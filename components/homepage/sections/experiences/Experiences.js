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
    <Section bgColor={colors.exps} txtColor={colors.greyText}>
      <div className={s.title}>
        <TitleBall title="Experiences"/>
      </div>
      <div className={s.experiences}>
        <ExperiencesList>
          {careers.map( (c, i) => <Career key={i} role={c.role} company={c.company} period={c.period} desc={c.desc}/>)}
        </ExperiencesList>
        {/*<ExperiencesList title="Educations" icon="hat">
          {educations.map( (e, i) => <Education key={i} institute={e.institute} type={e.type} period={e.period} desc={e.desc}/>)}
        </ExperiencesList>*/}
      </div>
    </Section>
  );
};

export default Experiences;
