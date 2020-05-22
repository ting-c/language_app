export const number_native = {
	introduction: `The Native Korean number system (hana, dool, set, etc) is for combining a number with an object-specific counter. These are the numbers you would use when counting a specific number of people, objects, or things.`,

	number_list: [
		{
			id: 1,
			numeral: 1,
			korean_char: "하나",
			romanization: "hana",
		},
		{
			id: 2,
			numeral: 2,
			korean_char: "둘",
			romanization: "dool",
		},
		{
			id: 3,
			numeral: 3,
			korean_char: "셋",
			romanization: "set",
		},
		{
			id: 4,
			numeral: 4,
			korean_char: "넷",
			romanization: "net",
		},
		{
			id: 5,
			numeral: 5,
			korean_char: "다섯",
			romanization: "dasut",
		},
		{
			id: 6,
			numeral: 6,
			korean_char: "여섯",
			romanization: "yusut",
		},
		{
			id: 7,
			numeral: 7,
			korean_char: "일곱",
			romanization: "eelgop",
		},
		{
			id: 8,
			numeral: 8,
			korean_char: "여덟",
			romanization: "yudulb",
		},
		{
			id: 9,
			numeral: 9,
			korean_char: "아홉",
			romanization: "ahop",
		},
		{
			id: 10,
			numeral: 10,
			korean_char: "열",
			romanization: "yul",
		},
	],
};

const generateRandomTypes = () => {
	const types = ["numeral", "korean_char", "romanization"];
	
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

export const generateChallenge = () => {
	const { contentType, optionsAndAnswerType } = generateRandomTypes();

	const lesson_name = number_native;
	const list_name = "number_list";

	const convertTypeToText = {
		korean_char: "korean character",
		numeral: "numeral",
		romanization: "romanization",
	};

	const header = `Choose the correct ${convertTypeToText[optionsAndAnswerType]} for the ${convertTypeToText[contentType]}`;

	const list = lesson_name[list_name];
	const random_option = list[Math.floor(Math.random() * list.length)];
	const incorrect_random_options = list.filter(
		option => option.id !== random_option.id
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