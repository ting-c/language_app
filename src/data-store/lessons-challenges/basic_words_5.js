export const basic_words_5 = {
  title: "Basic Words (ㅊ, ㅋ, ㅌ, ㅍ, ㅎ) ",

  introduction: `Here we will look at words that starts with ㅊ(ch), ㅋ(k), ㅌ(t), ㅍ(p), ㅎ(h) constructed with basic vowels.`,

  list: [
    {
      id: 1,
      korean_char: "차",
      romanization: "cha",
    },
    {
      id: 2,
      korean_char: "챠",
      romanization: "chya",
    },
    {
      id: 3,
      korean_char: "커",
      romanization: "keo",
    },
    {
      id: 4,
      korean_char: "켜",
      romanization: "kyeo",
    },
    {
      id: 5,
      korean_char: "토",
      romanization: "to",
    },
    {
      id: 6,
      korean_char: "툐",
      romanization: "tyo",
    },
    {
      id: 7,
      korean_char: "푸",
      romanization: "pu",
    },
    {
      id: 8,
      korean_char: "퓨",
      romanization: "pyu",
    },
    {
      id: 9,
      korean_char: "흐",
      romanization: "heu",
    },
    {
      id: 10,
      korean_char: "히",
      romanization: "hi",
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

export const generateBasicWords5Challenge = () => {
	const { contentType, optionsAndAnswerType } = generateRandomTypes();

	const lesson_name = basic_words_5;

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
