import React from 'react';
import './ChallengeButtonContainer.styles.scss';

const ChallengeButtonContainer = ({setChallenge}) => (
	<div className="ChallengeButtonContainer">
		<button className="challenge-button" onClick={() => setChallenge(true)}>
			I'm ready for the challenge
		</button>
	</div>
);

export default ChallengeButtonContainer;