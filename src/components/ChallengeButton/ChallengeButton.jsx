import React from 'react';
import './ChallengeButton.styles.scss';

const ChallengeButtonContainer = ({toggleDisplayChallenge}) => (
	<div className="challenge-button">
		<button onClick={() => toggleDisplayChallenge(true)}>
			I'm ready for the challenge
		</button>
	</div>
);

export default ChallengeButtonContainer;