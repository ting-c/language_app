import React, { useState } from 'react';
import './ChallengeContainer.styles.scss';
import ChallengeHeader from './../ChallengeHeader/ChallengeHeader';
import ChallengeContent from './../ChallengeContent/ChallengeContent';
import ChallengeOptions from './../ChallengeOptions/ChallengeOptions';
import { generateChallenge } from './../../data-store/number_sino/number_sino_challenge';

const ChallengeContainer = ({ header, content, options, answer, generateNextChallenge }) => {
	const [selectedOptionId, setSelectedOptionId] = useState(null);
	const [checkButtonColor, setCheckButtonColor] = useState('grey');
	const [showFooter, setShowFooter] = useState(false);
	const [footerMessage, changeFooterMessage] = useState(null);
	const [footerColor, setFooterColor] = useState(null);

	const checkAnswer = () => {
		if (selectedOptionId === null) return;

		if (selectedOptionId === answer.id) {
			changeFooterMessage("Correct!");
			setFooterColor("green");
		} else {
			changeFooterMessage(`Correct answer : ${answer.korean_char}`);
			setFooterColor("red");
		}
		setShowFooter(true);
	};

	const setCheckButtonAndOptionId = (optionId) => {
		setCheckButtonColor('color');
		setSelectedOptionId(optionId);

	}

	const continueNextChallenge = () => {
		setShowFooter(false);
		setCheckButtonColor('grey');
		generateNextChallenge(generateChallenge);
	}

	return (
		<div className="ChallengeContainer">
			<ChallengeHeader {...{ header }} />
			<ChallengeContent {...{ content }} />
			<ChallengeOptions {...{ options, answer, setCheckButtonAndOptionId }} />
			{showFooter ? (
				<div className={`footer-${footerColor}`}>
					<div>{footerMessage}</div>
					<div>
						<button
							className={'continue-button'}
							onClick={() => continueNextChallenge()}
						>
							Continue
						</button>
					</div>
				</div>
			) : (
				<button
					className={`check-button-${checkButtonColor}`}
					onClick={() => checkAnswer()}
				>
					Check
				</button>
			)}
		</div>
	);
};

export default ChallengeContainer;