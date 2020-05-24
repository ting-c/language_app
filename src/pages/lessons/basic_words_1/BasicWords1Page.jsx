import React, { useState } from "react";
import "../lesson-page.styles.scss";
import LessonContainer from "../../../components/LessonContainer/LessonContainer";
import ChallengeContainer from "../../../components/ChallengeContainer/ChallengeContainer";
import ChallengeButtonContainer from "../../../components/ChallengeButtonContainer/ChallengeButtonContainer";
import OverviewButtonContainer from "../../../components/OverviewButtonContainer/OverviewButtonContainer";
import LessonButton from "../../../components/LessonButton/LessonButton";
import {
	basic_words_1,
	generateChallenge,
} from "../../../data-store/lessons-challenges/basic_words_1";

const BasicWords1 = () => {
	const challengeCompleteProps = { lesson_name: "BASIC_WORDS_1" };

	const lessonProps = {
		lesson: basic_words_1,
	};

	const cardGroupProps = {
		listName: "word_list",
		cardProps: {
			top:  null,
			middle: "korean_char",
			bottom: "romanization",
		},
	};

	const [displayChallenge, setChallenge] = useState(false);
	const [challengeProps, setNextChallenge] = useState(generateChallenge());

	return (
		<div className="lesson-page">
			{displayChallenge ? (
				<div>
					<ChallengeContainer
						{...{ challengeCompleteProps }}
						{...lessonProps}
						{...challengeProps}
						{...{ setNextChallenge }}
						{...{ generateChallenge }}
					/>
					<LessonButton {...{ setChallenge }} />
				</div>
			) : (
				<div>
					<LessonContainer {...lessonProps} {...cardGroupProps} />
					<ChallengeButtonContainer {...{ setChallenge }} />
					<OverviewButtonContainer />
				</div>
			)}
		</div>
	);
};

export default BasicWords1;
