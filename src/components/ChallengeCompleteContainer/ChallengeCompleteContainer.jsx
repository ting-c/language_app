import React, { useEffect, useContext } from 'react';
import './ChallengeCompleteContainer.styles.scss';
import OverviewButtonContainer from '../OverviewButtonContainer/OverviewButtonContainer';
import challenge_completed_sound from './../../data-store/audio/challenge-completed.mp3';
import UIfx from "uifx";
import challenge_complete_image from '../../img/challenge_complete.png';
import { ProgressContext } from '../../providers/progress_provider';

const ChallengeCompleteContainer = ({skill_id}) => {
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
		switch (skill_id) {
			case 'number_sino':
				toggleNumberSino(true);
				break
			case 'number_native':
				toggleNumberNative(true);
				break
			case 'basic_consonants':
				toggleBasicConsonants(true);
				break
			case 'basic_vowels':
				toggleBasicVowels(true);
				break
			case 'double_vowels':
				toggleDoubleVowels(true);
				break
			case 'basic_words_1':
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