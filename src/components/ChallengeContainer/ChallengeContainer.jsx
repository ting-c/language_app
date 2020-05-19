import React from 'react';
import './ChallengeContainer.styles.scss';
import ChallengeHeader from './../ChallengeHeader/ChallengeHeader';
import ChallengeContent from './../ChallengeContent/ChallengeContent';
import ChallengeOptions from './../ChallengeOptions/ChallengeOptions';

const ChallengeContainer = () => (
  <div className='ChallengeContainer'>
    <ChallengeHeader />
    <ChallengeContent />
    <ChallengeOptions />
  </div>

)

export default ChallengeContainer;