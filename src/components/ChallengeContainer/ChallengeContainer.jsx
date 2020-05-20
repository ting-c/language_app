import React, { useState } from 'react';
import './ChallengeContainer.styles.scss';
import ChallengeHeader from './../ChallengeHeader/ChallengeHeader';
import ChallengeContent from './../ChallengeContent/ChallengeContent';
import ChallengeOptions from './../ChallengeOptions/ChallengeOptions';

const ChallengeContainer = ({ header, content, contentType, options, answer, optionsAndAnswerType, setNextChallenge, generateChallenge }) => {

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
			changeFooterMessage(`Correct answer : ${answer[optionsAndAnswerType]}`);
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
		setNextChallenge(generateChallenge);
	}

	return (
		<div className="ChallengeContainer">
			<ChallengeHeader {...{ header }} />
			<ChallengeContent {...{ content, contentType }} />
			<ChallengeOptions options={options} optionsAndAnswerType={optionsAndAnswerType} setCheckButtonAndOptionId={setCheckButtonAndOptionId} />
			{ showFooter ? (
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