import React, { useState } from "react";
import "./SkillPage.styles.scss";
import LessonContainer from  './../../components/LessonContainer/LessonContainer';
import ChallengeContainer from  './../../components/ChallengeContainer/ChallengeContainer';
import { generateChallenge } from "./../../data-store/number_sino/number_sino_challenge";

const SkillPage = () => {
	const [displayChallenge, setChallenge] = useState(false);
	const [challengeProps, generateNextChallenge] = useState(generateChallenge());
	
	return (
		<div className="SkillPage">
			{displayChallenge ? (
				<div>
					<ChallengeContainer {...challengeProps} {...{generateNextChallenge}} />
					<button className="lesson-button" onClick={() => setChallenge(false)}>
						Back to lesson
					</button>
				</div>
			) : (
				<div>
					<LessonContainer />
					<button className="challenge-button" onClick={() => setChallenge(true)}>
						I'm ready for the challenge
					</button>
				</div>
			)}
		</div>
	);
};

export default SkillPage;
