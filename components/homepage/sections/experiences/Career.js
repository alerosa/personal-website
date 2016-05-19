import React, {PropTypes} from 'react';
import Experience from './Experience'

const Career = ({role, company, period, desc}) => {
  return (
    <Experience title={role} subtitle={company} period={period} desc={desc}/>
  );
};

Career.propTypes = {
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Career;
