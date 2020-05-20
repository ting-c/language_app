import React, { useState } from "react";
import "./NumberNativePage.styles.scss";
import LessonContainer from "../../../components/LessonContainer/LessonContainer";
import ChallengeContainer from "../../../components/ChallengeContainer/ChallengeContainer";
import SkillMapButton from './../../../components/SkillMapButton/SkillMapButton';
import {
	number_native,
	generateChallenge,
} from "./../../../data-store/number_native/number_native";

const NumberNativePage = () => {
	const [displayChallenge, setChallenge] = useState(false);
	const [challengeProps, setNextChallenge] = useState(generateChallenge());

	return (
		<div className="NumberNativePage">
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
					<LessonContainer lesson={number_native} />
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

export default NumberNativePage;
