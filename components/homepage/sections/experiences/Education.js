import React, {PropTypes} from 'react';
import Experience from './Experience'

const Education = ({institute, type, period, desc}) => {
  return (
    <div>
      <Experience title={institute} subtitle={type} period={period} desc={desc}/>
    </div>
  );
};

Education.propTypes = {
  institute: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Education;
