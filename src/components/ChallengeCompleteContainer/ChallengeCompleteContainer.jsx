import React, { useEffect, useContext } from 'react';
import './ChallengeCompleteContainer.styles.scss';
import OverviewButtonContainer from '../OverviewButtonContainer/OverviewButtonContainer';
import challenge_completed_sound from './../../data-store/audio/challenge-completed.mp3';
import UIfx from "uifx";
import challenge_complete_image from '../../img/challenge_complete.png';
import { ProgressContext } from '../../providers/progress_provider';

const ChallengeCompleteContainer = ({skill_id}) => {
	const {
		handleSetProgressState
	} = useContext(ProgressContext);

	useEffect( () => {
		challenge_completed.play();
		handleSetProgressState(skill_id , true);
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