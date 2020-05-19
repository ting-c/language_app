import React from 'react';
import './ChallengeOptions.styles.scss';
import Button from 'react-bootstrap/Button';

const ChallengeOptions = ( {options, optionClicked} ) => {
 
  return (
    <div className='ChallengeOptions'>
      { options.map(option => {
        const { id, korean_char } = option;
        return (
          <Button className='option' key={id} onClick={() => optionClicked(id)}>
            {korean_char}
          </Button>
        )})}
    </div>
)}

export default ChallengeOptions;