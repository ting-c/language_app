import React, { useState } from "react";
import "./DoubleVowelsPage.styles.scss";
import LessonContainer from "../../../components/LessonContainer/LessonContainer";
import ChallengeContainer from "../../../components/ChallengeContainer/ChallengeContainer";
import ChallengeButtonContainer from "../../../components/ChallengeButtonContainer/ChallengeButtonContainer";
import OverviewButtonContainer from "../../../components/OverviewButtonContainer/OverviewButtonContainer";
import LessonButton from "../../../components/LessonButton/LessonButton";
import { double_vowels,	generateChallenge } from "../../../data-store/lessons-challenges/double_vowels";


const DoubleVowelsPage = () => {
	const lessonProps = {
		lesson: double_vowels,
	};

	const cardGroupProps = {
		listName: "vowels_list",
		cardProps: {
			top: null,
			middle: "korean_char",
			bottom: 'romanization',
		},
	};

	const [displayChallenge, setChallenge] = useState(false);
	const [challengeProps, setNextChallenge] = useState(generateChallenge());

	return (
		<div className="DoubleVowelsPage">
			{displayChallenge ? (
				<div>
					<ChallengeContainer
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

export default DoubleVowelsPage;
