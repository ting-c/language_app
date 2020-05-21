import React, { useState } from "react";
import "./NumberSinoPage.styles.scss";
import LessonContainer from "../../../components/LessonContainer/LessonContainer";
import ChallengeContainer from "../../../components/ChallengeContainer/ChallengeContainer";
import SkillMapButton from './../../../components/SkillMapButton/SkillMapButton';
import { number_sino, generateChallenge } from './../../../data-store/lessons-challenges/number_sino';

const NumberSinoPage = () => {
	const [displayChallenge, setChallenge] = useState(false);
	const [challengeProps, setNextChallenge] = useState(generateChallenge());

	return (
		<div className="NumberSinoPage">
			{displayChallenge ? (
				<div>
					<ChallengeContainer 
						{...challengeProps}
						{...{ setNextChallenge }}
						{...{ generateChallenge }}
					/>
					<button className="lesson-button" onClick={() => setChallenge(false)}>
						Back to lesson
					</button>
				</div>
			) : (
				<div>
					<LessonContainer lesson={number_sino} />
					<div className="challenge-button-container">
						<button
							className="challenge-button"
							onClick={() => setChallenge(true)}
						>
							I'm ready for the challenge
						</button>
					</div>
					<div className="skill-map-button-container">
						<SkillMapButton />
					</div>
				</div>
			)}
		</div>
	);
};

export default NumberSinoPage;
