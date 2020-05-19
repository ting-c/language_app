import React, { useState } from "react";
import "./SkillPage.styles.scss";
import LessonContainer from  './../../components/LessonContainer/LessonContainer';
import ChallengeContainer from  './../../components/ChallengeContainer/ChallengeContainer';

const SkillPage = () => {
	const [displayChallenge, setChallenge] = useState(false);
	
	return (
		<div className="SkillPage">
			{displayChallenge ? (
				<div>
					<ChallengeContainer />
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
