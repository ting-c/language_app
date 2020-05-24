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
import { basic_words_1, generateBasicWords1Challenge } from "../../data-store/lessons-challenges/basic_words_1";
import { double_vowels, generateDoubleVowelsChallenge } from "../../data-store/lessons-challenges/double_vowels";

const LessonPage = (props) => {
  let lessonProps, cardGroupProps, challengeGenerator, challengeCompleteProps;
  switch (props.match.params.skill_id) {
    case 'number_sino':
      lessonProps = {
        lesson: number_sino,
      };
      cardGroupProps = {
        listName: "number_list",
        cardProps: {
          top: "numeral",
          middle: "korean_char",
          bottom: "romanization",
        },
      };
      challengeGenerator =  generateNumberSinoChallenge ;
      challengeCompleteProps = { lesson_name: "NUMBER_SINO" };
      break

    case 'number_native':
      lessonProps = {
        lesson: number_native,
      };
      cardGroupProps = {
        listName: "number_list",
        cardProps: {
          top: "numeral",
          middle: "korean_char",
          bottom: "romanization",
        },
      };
      challengeGenerator = generateNumberNativeChallenge ;
	    challengeCompleteProps = { lesson_name: "NUMBER_NATIVE" };
      break
    case 'basic_consonants':
      lessonProps = {
        lesson: basic_consonants,
      };
      cardGroupProps = {
        listName: "consonant_list",
        cardProps: {
          top: null,
          middle: "korean_char",
          bottom: "romanization",
        },
      };
      challengeGenerator = generateBasicConsonantsChallenge ;
	    challengeCompleteProps = { lesson_name: "BASIC_CONSONANTS" };
      break
    case 'basic_vowels':
      lessonProps = {
        lesson: basic_vowels,
      };
      cardGroupProps = {
        listName: "vowel_list",
        cardProps: {
          top: null,
          middle: "korean_char",
          bottom: "romanization",
        },
      };
      challengeGenerator = generateBasicVowelsChallenge ;
	    challengeCompleteProps = { lesson_name: "BASIC_VOWELS" };
      break
    case 'basic_words_1':
      lessonProps = {
        lesson: basic_words_1,
      };
      cardGroupProps = {
        listName: "word_list",
        cardProps: {
          top: null,
          middle: "korean_char",
          bottom: "romanization",
        },
      };
      challengeGenerator = generateBasicWords1Challenge ;
	    challengeCompleteProps = { lesson_name: "BASIC_WORDS_1" };
      break
    case 'double_vowels':
      lessonProps = {
        lesson: double_vowels,
      };
      cardGroupProps = {
        listName: "vowel_list",
        cardProps: {
          top: null,
          middle: "korean_char",
          bottom: "romanization",
        },
      };
      challengeGenerator = generateDoubleVowelsChallenge ;
	    challengeCompleteProps = { lesson_name: "DOUBLE_VOWELS" };
      break

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
					<LessonContainer {...lessonProps} {...cardGroupProps} />
					<ChallengeButtonContainer {...{ setChallenge }} />
					<OverviewButtonContainer />
				</div>
			)}
		</div>
	);
};

export default LessonPage;
