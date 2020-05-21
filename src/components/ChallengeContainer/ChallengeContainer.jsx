import React, { useState } from 'react';
import './ChallengeContainer.styles.scss';
import ChallengeHeader from './../ChallengeHeader/ChallengeHeader';
import ChallengeContent from './../ChallengeContent/ChallengeContent';
import ChallengeOptions from './../ChallengeOptions/ChallengeOptions';
import correctSound from './../../data-store/audio/correct.mp3';
import UIfx from 'uifx';


const ChallengeContainer = ({ header, content, contentType, options, answer, optionsAndAnswerType, setNextChallenge, generateChallenge }) => {

	const correct = new UIfx(
		correctSound,
		{ volume:1 }
	);

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
			correct.play();
		} else {
			changeFooterMessage(`Answer : ${answer[optionsAndAnswerType]}`);
			setFooterColor("red");
		}
		setShowFooter(true);
	};

	const setCheckButtonAndOptionId = (optionId) => {
		setCheckButtonColor('color');
		setSelectedOptionId(optionId);
	}

	const continueNextChallenge = () => {
		setSelectedOptionId(null);
		setShowFooter(false);
		setCheckButtonColor('grey');
		setNextChallenge(generateChallenge);
	}

	return (
		<div className="ChallengeContainer">
			<ChallengeHeader {...{ header }} />
			<ChallengeContent {...{ content, contentType }} />
			<ChallengeOptions
				options={options}
				optionsAndAnswerType={optionsAndAnswerType}
				setCheckButtonAndOptionId={setCheckButtonAndOptionId}
			/>
			{showFooter ? (
				<div className={`footer-${footerColor}`}>
					<div>{footerMessage}</div>
					<div>
						<button
							className={"continue-button"}
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