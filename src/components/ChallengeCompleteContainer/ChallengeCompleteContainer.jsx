import React, { useEffect, useContext } from 'react';
import './ChallengeCompleteContainer.styles.scss';
import OverviewButtonContainer from '../OverviewButtonContainer/OverviewButtonContainer';
import challenge_completed_sound from './../../data-store/audio/challenge-completed.mp3';
import UIfx from "uifx";
import challenge_complete_image from '../../img/challenge_complete.png';
import { ProgressContext } from '../../providers/progress_provider';

const ChallengeCompleteContainer = ({lesson_name}) => {
	const {
		toggleNumberSino,
		toggleNumberNative,
		toggleBasicConsonants,
		toggleBasicVowels,
		toggleDoubleVowels,
		toggleBasicWords1
	} = useContext(ProgressContext);

	useEffect( () => {
		challenge_completed.play();
		switch (lesson_name) {
			case 'NUMBER_SINO':
				toggleNumberSino(true);
				break
			case 'NUMBER_NATIVE':
				toggleNumberNative(true);
				break
			case 'BASIC_CONSONANTS':
				toggleBasicConsonants(true);
				break
			case 'BASIC_VOWELS':
				toggleBasicVowels(true);
				break
			case 'DOUBLE_VOWELS':
				toggleDoubleVowels(true);
				break
			case 'BASIC_WORDS_1':
				toggleBasicWords1(true);
				break
			default:
		}
	});

	const challenge_completed = new UIfx(challenge_completed_sound, { volume: 0.7 });

	return (
	<div className="challenge-complete-container">
		<div className='trophy-image-container'>
			<img className='trophy-image' src={challenge_complete_image} alt='challenge complete'/>
			<div className='trophy-text'>
				Challenge Complete!
			</div>
		</div>
		<OverviewButtonContainer />
	</div>
)};

export default ChallengeCompleteContainer;