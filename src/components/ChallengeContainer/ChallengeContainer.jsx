import React, { useState } from 'react';
import './ChallengeContainer.styles.scss';
import ChallengeHeader from './../ChallengeHeader/ChallengeHeader';
import ChallengeContent from './../ChallengeContent/ChallengeContent';
import ChallengeOptions from './../ChallengeOptions/ChallengeOptions';
import { generateChallenge } from './../../data-store/number_sino/number_sino_challenge';

const ChallengeContainer = () => {
	const { header, content, options, answer } = generateChallenge();
	
	const [selectedOptionId, optionClicked] = useState(null);
	const [showFooter, checkButtonClicked] = useState(false);
	const [footerMessage, changeFooterMessage] = useState(null);
	const [footerColor, setFooterColor] = useState(null);

	const checkAnswer = () => {
		if (selectedOptionId === null) return;

		if (selectedOptionId === answer.id) {
			changeFooterMessage("Correct!");
			setFooterColor('green');
		} else {
			changeFooterMessage(`Correct answer : ${answer.korean_char}`);
			setFooterColor("red");
		}
		checkButtonClicked(true);
	}; 

	return (
		<div className="ChallengeContainer">
			<ChallengeHeader {...{ header }} />
			<ChallengeContent {...{ content }} />
			<ChallengeOptions {...{ options, answer, optionClicked }} />
			{ showFooter ? (
					<div className={`footer-${footerColor}`}>
						{footerMessage}
					</div>
				) : (
					<button className='check-button' onClick={() => checkAnswer(answer.id)}>Check</button>
				)
			}
		</div>
	);};

export default ChallengeContainer;