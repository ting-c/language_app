export const basic_words_4 = {
  title: "Basic Words (ㅂ, ㅅ, ㅇ, ㅈ) ",

  introduction: `Here we will look at words that starts with ㅂ(b), ㅅ(s), ㅇ (o / empty sound for consonant), ㅈ(j) constructed with basic vowels.`,

  list: [
    {
      id: 1,
      korean_char: "바",
      romanization: "ba",
    },
    {
      id: 2,
      korean_char: "뱌",
      romanization: "bya",
    },
    {
      id: 3,
      korean_char: "버",
      romanization: "beo",
    },
    {
      id: 4,
      korean_char: "셔",
      romanization: "syeo",
    },
    {
      id: 5,
      korean_char: "소",
      romanization: "so",
    },
    {
      id: 6,
      korean_char: "쇼",
      romanization: "syo",
    },
    {
      id: 7,
      korean_char: "우",
      romanization: "u",
    },
    {
      id: 8,
      korean_char: "유",
      romanization: "yu",
    },
    {
      id: 9,
      korean_char: "즈",
      romanization: "jeu",
    },
    {
      id: 10,
      korean_char: "지",
      romanization: "ji",
    },
  ],
};

const generateRandomTypes = () => {
	const types = ["korean_char", "romanization"];

	let bothAreSameTypes = true;
	let contentType, optionsAndAnswerType;
	while (bothAreSameTypes) {
		contentType = types[Math.floor(Math.random() * types.length)];
		optionsAndAnswerType = types[Math.floor(Math.random() * types.length)];
		if (optionsAndAnswerType !== contentType) {
			bothAreSameTypes = false;
		}
	}
	return { contentType, optionsAndAnswerType };
};

export const generateBasicWords4Challenge = () => {
	const { contentType, optionsAndAnswerType } = generateRandomTypes();

	const lesson_name = basic_words_4;

	const convertTypeToText = {
		korean_char: "korean character",
		sound: "sound",
		romanization: "romanization",
	};

	const header = `Choose the correct ${convertTypeToText[optionsAndAnswerType]} for the ${convertTypeToText[contentType]}`;

	const list = lesson_name.list;
	const random_option = list[Math.floor(Math.random() * list.length)];
	const incorrect_random_options = list.filter(
		(option) => option.id !== random_option.id
	);

	const answer = random_option;
	const content = random_option;
	const incorrect_options = incorrect_random_options.slice(0, 3);
	const unshuffled_options = [...incorrect_options, answer];

	const options = unshuffled_options.sort(() => Math.random() - 0.5);

	return {
		header,
		content,
		contentType,
		options,
		answer,
		optionsAndAnswerType,
	};
};
