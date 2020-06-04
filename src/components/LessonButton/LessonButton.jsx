import React from 'react';
import './LessonButton.styles.scss';

const LessonButton = ({ toggleDisplayChallenge }) => (
	<div className='lesson-button' data-testid='lesson-button'> 
		<button onClick={() => toggleDisplayChallenge()}>
			Back to lesson
		</button>
	</div>
);

export default LessonButton;