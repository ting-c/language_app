import React, { useState } from "react";
import "./NumberNativePage.styles.scss";
import LessonContainer from "../../../components/LessonContainer/LessonContainer";
import ChallengeContainer from "../../../components/ChallengeContainer/ChallengeContainer";
import ChallengeButtonContainer from "./../../../components/ChallengeButtonContainer/ChallengeButtonContainer";
import OverviewButtonContainer from "./../../../components/OverviewButtonContainer/OverviewButtonContainer";
import LessonButton from "./../../../components/LessonButton/LessonButton";
import { number_native,	generateChallenge } from "./../../../data-store/lessons-challenges/number_native";


const NumberNativePage = () => {

	const challengeCompleteProps = { lesson_name: "NUMBER_NATIVE" };

	const lessonProps = {
		lesson: number_native,
	};

	const cardGroupProps = {
		listName: "number_list",
		cardProps: {
			top: "numeral",
			middle: "korean_char",
			bottom: "romanization",
		},
	};

	const [displayChallenge, setChallenge] = useState(false);
	const [challengeProps, setNextChallenge] = useState(generateChallenge());

	return (
		<div className="NumberSinoPage">
			{displayChallenge ? (
				<div>
					<ChallengeContainer
						{...{ challengeCompleteProps }}
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

export default NumberNativePage;
