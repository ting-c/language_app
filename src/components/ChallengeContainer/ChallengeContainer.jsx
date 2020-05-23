import React, { useState } from 'react';
import './ChallengeContainer.styles.scss';
import ChallengeHeader from './../ChallengeHeader/ChallengeHeader';
import ChallengeContent from './../ChallengeContent/ChallengeContent';
import ChallengeOptions from './../ChallengeOptions/ChallengeOptions';
import ChallengeCompleteContainer from './../ChallengeCompleteContainer/ChallengeCompleteContainer';
import correctSound from './../../data-store/audio/correct.mp3';
import wrongSound from './../../data-store/audio/wrong.mp3';
import UIfx from 'uifx';
import ProgressBar from 'react-bootstrap/ProgressBar';


const ChallengeContainer = ({ challengeCompleteProps, header, content, contentType, options, answer, optionsAndAnswerType, setNextChallenge, generateChallenge }) => {

	const correct = new UIfx(
		correctSound,
		{ volume:1 }
	);
	const wrong = new UIfx(
		wrongSound,
		{ volume:1 }
	);

	const [selectedOptionId, setSelectedOptionId] = useState(null);
	const [checkButtonColor, setCheckButtonColor] = useState('grey');
	const [showFooter, setShowFooter] = useState(false);
	const [footerMessage, changeFooterMessage] = useState(null);
	const [footerColor, setFooterColor] = useState(null);
	const [progress, setProgress] = useState(0);
		
	const checkAnswer = () => {
		if (selectedOptionId === null) return;

		if (selectedOptionId === answer.id) {
			changeFooterMessage("Correct!");
			setFooterColor("green");
			if (progress < 100) {correct.play()};
			setProgress(progress + 15);
		} else {
			changeFooterMessage(`Answer : ${answer[optionsAndAnswerType]}`);
			setFooterColor("red");
			wrong.play();
			if (progress >= 15) {setProgress(progress - 10)};
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
			{ progress >= 100 ? (
				<ChallengeCompleteContainer {...challengeCompleteProps}/>
				) : (
				<div className='display-challenge'>
					<ProgressBar animated now={progress} />
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
				)}
			</div>
	);
};

export default ChallengeContainer;