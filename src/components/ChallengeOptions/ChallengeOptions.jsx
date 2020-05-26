import React from 'react';
import './ChallengeOptions.styles.scss';
import UIfx from "uifx";

const ChallengeOptions = ({	options, optionsAndAnswerType, setCheckButtonAndOptionId,
	skill_id
}) => {
	return (
		<div className="ChallengeOptions">
			{options.map( option => {
				const option_id = option.id;
				
				const handleClick = async (skill_id, option_id) => {
					setCheckButtonAndOptionId(option_id);
					const noSound = ["basic_consonants"];
					if (noSound.includes(skill_id) || optionsAndAnswerType !== 'romanization') return;

					const soundFile = await import(
						`../../data-store/audio/${skill_id}/${option_id}.wav`
					);
					const pronunciation = new UIfx(soundFile.default, {
						volume: 1,
					});
					pronunciation.play();
				};
				return (
					<button
						className="option"
						key={option_id}
						onClick={() => handleClick(skill_id, option_id)}
					>
						{option[optionsAndAnswerType]}
					</button>
				);
			})}
		</div>
	);
};

export default ChallengeOptions;