import React, { useState } from "react";
import "./NumberSinoPage.styles.scss";
import LessonContainer from "../../../components/LessonContainer/LessonContainer";
import ChallengeContainer from "../../../components/ChallengeContainer/ChallengeContainer";
import ChallengeButtonContainer from './../../../components/ChallengeButtonContainer/ChallengeButtonContainer';
import SkillMapButtonContainer from './../../../components/SkillMapButtonContainer/SkillMapButtonContainer';
import LessonButton from './../../../components/LessonButton/LessonButton';
import { number_sino, generateChallenge } from './../../../data-store/lessons-challenges/number_sino';

const NumberSinoPage = () => {
	const lessonProps = {
		lesson: number_sino
	}

	const cardGroupProps = {
		listName: "number_list",
		cardProps: {
			top: "numeral",
			middle: "korean_char",
			bottom: "romanization",
		}
	};

	const [displayChallenge, setChallenge] = useState(false);
	const [challengeProps, setNextChallenge] = useState(generateChallenge());

	return (
		<div className="NumberSinoPage">
			{ displayChallenge ? (
				<div>
					<ChallengeContainer 
						{...challengeProps}
						{...{ setNextChallenge }}
						{...{ generateChallenge }}
					/>
					<LessonButton {...{ setChallenge }}/>
				</div>
			) : (
				<div>
					<LessonContainer {...lessonProps} {...cardGroupProps} />
					<ChallengeButtonContainer {...{setChallenge}}/>
					<SkillMapButtonContainer />
				</div>
			)}
		</div>
	);
};

export default NumberSinoPage;
