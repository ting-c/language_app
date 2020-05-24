import React, { useState } from "react";
import "./LessonPage.styles.scss";
import LessonContainer from "../../components/LessonContainer/LessonContainer";
import ChallengeContainer from "../../components/ChallengeContainer/ChallengeContainer";
import ChallengeButtonContainer from "../../components/ChallengeButtonContainer/ChallengeButtonContainer";
import OverviewButtonContainer from "../../components/OverviewButtonContainer/OverviewButtonContainer";
import LessonButton from "../../components/LessonButton/LessonButton";
import { number_sino, generateNumberSinoChallenge } from "../../data-store/lessons-challenges/number_sino";
import { number_native, generateNumberNativeChallenge } from "../../data-store/lessons-challenges/number_native";
import { basic_consonants, generateBasicConsonantsChallenge } from "../../data-store/lessons-challenges/basic_consonants";
import { basic_vowels, generateBasicVowelsChallenge } from "../../data-store/lessons-challenges/basic_vowels";
import { double_vowels, generateDoubleVowelsChallenge } from "../../data-store/lessons-challenges/double_vowels";
import { basic_words_1, generateBasicWords1Challenge } from "../../data-store/lessons-challenges/basic_words_1";
import { basic_words_2, generateBasicWords2Challenge } from "../../data-store/lessons-challenges/basic_words_2";

const LessonPage = ({ match }) => {
  const { skill_id } = match.params
  let lessonProps, cardProps, challengeGenerator, challengeCompleteProps;
  switch (skill_id) {
		case "number_sino":
			lessonProps = {
				lesson: number_sino,
			};
			cardProps = {
				top: "numeral",
				middle: "korean_char",
				bottom: "romanization",
			};

			challengeGenerator = generateNumberSinoChallenge;
			challengeCompleteProps = { skill_id };
			break;

		case "number_native":
			lessonProps = {
				lesson: number_native,
			};
			cardProps = {
				top: "numeral",
				middle: "korean_char",
				bottom: "romanization",
			};
			challengeGenerator = generateNumberNativeChallenge;
			challengeCompleteProps = { skill_id };
			break;
		case "basic_consonants":
			lessonProps = {
				lesson: basic_consonants,
			};
			cardProps = {
				top: null,
				middle: "korean_char",
				bottom: "romanization",
			};
			challengeGenerator = generateBasicConsonantsChallenge;
			challengeCompleteProps = { skill_id };
			break;
		case "basic_vowels":
			lessonProps = {
				lesson: basic_vowels,
			};
			cardProps = {
				top: null,
				middle: "korean_char",
				bottom: "romanization",
			};
			challengeGenerator = generateBasicVowelsChallenge;
			challengeCompleteProps = { skill_id };
			break;
		case "double_vowels":
			lessonProps = {
				lesson: double_vowels,
			};
			cardProps = {
				top: null,
				middle: "korean_char",
				bottom: "romanization",
			};
			challengeGenerator = generateDoubleVowelsChallenge;
			challengeCompleteProps = { skill_id };
			break;
		case "basic_words_1":
			lessonProps = {
				lesson: basic_words_1,
			};
			cardProps = {
				top: null,
				middle: "korean_char",
				bottom: "romanization",
			};
			challengeGenerator = generateBasicWords1Challenge;
			challengeCompleteProps = { skill_id };
			break;
		case "basic_words_2":
			lessonProps = {
				lesson: basic_words_2,
			};
			cardProps = {
				top: null,
				middle: "korean_char",
				bottom: "romanization",
			};
			challengeGenerator = generateBasicWords2Challenge;
			challengeCompleteProps = { skill_id };
			break;
		default:
	}

	const [displayChallenge, setChallenge] = useState(false);
	const [challengeProps, setNextChallenge] = useState(challengeGenerator);

	return (
		<div className="lesson-page">
			{displayChallenge ? (
				<div>
					<ChallengeContainer
						{...{ challengeCompleteProps }}
						{...challengeProps}
						{...{ setNextChallenge }}
						{...{ challengeGenerator }}
					/>
					<LessonButton {...{ setChallenge }} />
				</div>
			) : (
				<div>
					<LessonContainer {...lessonProps} {...{cardProps}} />
					<ChallengeButtonContainer {...{ setChallenge }} />
					<OverviewButtonContainer />
				</div>
			)}
		</div>
	);
};

export default LessonPage;
