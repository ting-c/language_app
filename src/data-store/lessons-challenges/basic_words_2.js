export const basic_words_2 = {
	title: "Basic Words (ㄴ) ",

	introduction: `Now we will use the consonants and vowels in previous lesson to form words. Here we will focus on words that starts with ㄴ (n). For example: ㅏ(a), ㅑ(ya), ㅓ(eo) combined with ㄴ (n) will make 나 (na), 냐 (nya), 너 (neo)`,

	list: [
		{
			id: 1,
			korean_char: "나",
			romanization: "na",
		},
		{
			id: 2,
			korean_char: "냐",
			romanization: "nya",
		},
		{
			id: 3,
			korean_char: "너",
			romanization: "neo",
		},
		{
			id: 4,
			korean_char: "녀",
			romanization: "nyeo",
		},
		{
			id: 5,
			korean_char: "노",
			romanization: "no",
		},
		{
			id: 6,
			korean_char: "뇨",
			romanization: "nyo",
		},
		{
			id: 7,
			korean_char: "누",
			romanization: "nu",
		},
		{
			id: 8,
			korean_char: "뉴",
			romanization: "nyu",
		},
		{
			id: 9,
			korean_char: "느",
			romanization: "neu",
		},
		{
			id: 10,
			korean_char: "니",
			romanization: "ni",
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

export const generateBasicWords2Challenge = () => {
	const { contentType, optionsAndAnswerType } = generateRandomTypes();

	const lesson_name = basic_words_2;

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
