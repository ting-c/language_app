import React, { useState } from "react";
import "./BasicConsonantsPage.styles.scss";
import LessonContainer from "../../../components/LessonContainer/LessonContainer";
import ChallengeContainer from "../../../components/ChallengeContainer/ChallengeContainer";
import ChallengeButtonContainer from "../../../components/ChallengeButtonContainer/ChallengeButtonContainer";
import OverviewButtonContainer from "../../../components/OverviewButtonContainer/OverviewButtonContainer";
import LessonButton from "../../../components/LessonButton/LessonButton";
import { basic_consonants,	generateChallenge } from "../../../data-store/lessons-challenges/basic_consonants";


const BasicConsonantsPage = () => {

	const challengeCompleteProps = { lesson_name: "BASIC_CONSONANTS" };

	const lessonProps = {
		lesson: basic_consonants,
	};

	const cardGroupProps = {
		listName: "consonant_list",
		cardProps: {
			top: 'romanization',
			middle: "korean_char",
			bottom: "sound",
		},
	};

	const [displayChallenge, setChallenge] = useState(false);
	const [challengeProps, setNextChallenge] = useState(generateChallenge());

	return (
		<div className="BasicConsonantsPage">
			{displayChallenge ? (
				<div>
					<ChallengeContainer
						{...{challengeCompleteProps}}
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

export default BasicConsonantsPage;
