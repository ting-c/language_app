import React from 'react';
import './BackButton.styles.scss';

const BackButton = ({history}) => (
  <button className='back-button' onClick={() => history.goBack()}>
    Back
  </button>
)

export default BackButton;