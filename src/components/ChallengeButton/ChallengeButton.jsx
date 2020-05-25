import React from 'react';
import './ChallengeButton.styles.scss';

const ChallengeButtonContainer = ({setChallenge}) => (
	<div className="challenge-button">
		<button onClick={() => setChallenge(true)}>
			I'm ready for the challenge
		</button>
	</div>
);

export default ChallengeButtonContainer;