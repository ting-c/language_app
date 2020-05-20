import React from 'react';
import './ChallengeOptions.styles.scss';

const ChallengeOptions = ({ options, setCheckButtonAndOptionId }) => {
	return (
		<div className="ChallengeOptions">
			{options.map((option) => {
				const { id, korean_char } = option;
				return (
					<button
						className="option"
						key={id}
						onClick={() => setCheckButtonAndOptionId(id)}
					>
						{korean_char}
					</button>
				);
			})}
		</div>
	);
};

export default ChallengeOptions;