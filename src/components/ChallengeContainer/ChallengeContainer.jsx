import React from 'react';
import './ChallengeContainer.styles.scss';
import ChallengeHeader from './../ChallengeHeader/ChallengeHeader';
import ChallengeContent from './../ChallengeContent/ChallengeContent';
import ChallengeOptions from './../ChallengeOptions/ChallengeOptions';
import { header, content, correct_option, incorrect_options } from './../../data-store/number_sino/number_sino_challenge';

const ChallengeContainer = () => (
	<div className="ChallengeContainer">
		<ChallengeHeader {...{header}} />
		<ChallengeContent {...{content}} />
		<ChallengeOptions
			{...{correct_option, incorrect_options}}
		/>
	</div>
);

export default ChallengeContainer;