import React, {PropTypes} from 'react';
import Section from '../../../common/Section';
import TitleBall from '../../../common/TitleBall';
import Skill from './Skill';
import colors from '../../../common-styles/Colors.css';
import s from './Skills.css';

const Skills = ({skills}) => {
  const skillsPerColumn = Math.floor(Object.keys(skills).length / 3);

  const skillList = (skills) => {
    {Object.keys(skills).map((name, index) =>
      <li className={s.skill}>
        <Skill name={name} level={parseInt(skills[name])}/>
      </li>
    )}
  };

  return (
    <Section bgColor={colors.skills} txtColor={colors.lightText}>
      <div className={s.title}>
        <TitleBall title="Skills"/>
      </div>
      <div className={s.lists}>
        <ul className={s.list}>
          {Object.keys(skills).slice(0, skillsPerColumn + 1).map((name, index) =>
            <li key={index} className={s.skill}>
              <Skill name={name} level={parseInt(skills[name])}/>
            </li>
          )}
        </ul>
        <ul className={s.list}>
          {Object.keys(skills).slice(skillsPerColumn + 1, (skillsPerColumn + 1) * 2).map((name, index) =>
            <li key={index} className={s.skill}>
              <Skill name={name} level={parseInt(skills[name])}/>
            </li>
          )}
        </ul>
        <ul className={s.list}>
          {Object.keys(skills).slice((skillsPerColumn * 2) + 1 * 2, (skillsPerColumn * 3 + 1)).map((name, index) =>
            <li key={index} className={s.skill}>
              <Skill name={name} level={parseInt(skills[name])}/>
            </li>
          )}
        </ul>
      </div>
    </Section>
  );
};

Skills.propTypes = {
  skills: PropTypes.object.isRequired,
};

export default Skills;
