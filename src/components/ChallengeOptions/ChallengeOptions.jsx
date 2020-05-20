import React from 'react';
import './ChallengeOptions.styles.scss';

const ChallengeOptions = ({
	options,
	optionsAndAnswerType,
	setCheckButtonAndOptionId
}) => {
	return (
		<div className="ChallengeOptions">
			{options.map( option => {
				return (
					<button
						className="option"
						key={option.id}
						onClick={() => setCheckButtonAndOptionId(option.id)}
					>
						{option[optionsAndAnswerType]}
					</button>
				);
			})}
		</div>
	);
};

export default ChallengeOptions;