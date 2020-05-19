import React, { useState } from "react";
import "./SkillPage.styles.scss";
import LessonContainer from  './../../components/LessonContainer/LessonContainer';
import ChallengeContainer from  './../../components/ChallengeContainer/ChallengeContainer';

const SkillPage = () => {

	const [displayChallenge, setChallenge] = useState(false);
	
	return (
		<div className="SkillPage">
			<div className='button-group'>
				<button onClick={() => setChallenge(false)}>Lesson</button>
				<button onClick={() => setChallenge(true)}>Challenge</button>
			</div>

			{displayChallenge ? <ChallengeContainer /> : <LessonContainer />}
		</div>
	);};

export default SkillPage;
