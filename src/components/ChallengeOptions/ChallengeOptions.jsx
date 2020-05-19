import React from 'react';
import './ChallengeOptions.styles.scss';

const ChallengeOptions = ({incorrect_options, correct_option}) => (
  <div className='ChallengeOptions'>
    {incorrect_options.map(option => (
      <div className='option'>
        {option}
      </div>
    ))}
    <div className='option'>{correct_option}</div>
  </div>

)

export default ChallengeOptions;