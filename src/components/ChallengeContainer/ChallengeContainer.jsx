import React, { useState } from 'react';
import './ChallengeContainer.styles.scss';
import ChallengeHeader from './../ChallengeHeader/ChallengeHeader';
import ChallengeContent from './../ChallengeContent/ChallengeContent';
import ChallengeOptions from './../ChallengeOptions/ChallengeOptions';
import { header, content, options, answer } from './../../data-store/number_sino/number_sino_challenge';

const ChallengeContainer = () => {
	const [selectedOptionId, optionClicked] = useState(null);

	const checkAnswer = () => {
			if (selectedOptionId === answer.id) {
				console.log("answer is correct");
			} else {
				console.log("wrong answer");
			}
	}; 

	return (
		<div className="ChallengeContainer">
			<ChallengeHeader {...{ header }} />
			<ChallengeContent {...{ content }} />
			<ChallengeOptions {...{ options, answer, optionClicked }} />
			<button className='check-button' onClick={() => checkAnswer(answer.id)}>Check</button>
		</div>
	);};

export default ChallengeContainer;