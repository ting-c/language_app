import React from 'react';
import './LessonButton.styles.scss';

const LessonButton = ({ setChallenge }) => (
	<button className="lesson-button" onClick={() => setChallenge(false)}>
		Back to lesson
	</button>
);

export default LessonButton;