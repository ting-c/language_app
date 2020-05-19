import React, { useState } from "react";
import "./SkillPage.styles.scss";
import LessonContainer from  './../../components/LessonContainer/LessonContainer';
import ChallengeContainer from  './../../components/ChallengeContainer/ChallengeContainer';
import Button from "react-bootstrap/Button";

const SkillPage = () => {

	const [displayChallenge, setChallenge] = useState(false);
	console.log(displayChallenge);
	
	return (
		<div className="SkillPage">
			<div className='button-group'>
				<Button onClick={() => setChallenge(false)}>Lesson</Button>
				<Button onClick={() => setChallenge(true)}>Challenge</Button>
			</div>

			{displayChallenge ? <ChallengeContainer /> : <LessonContainer />}
		</div>
	);};

export default SkillPage;
