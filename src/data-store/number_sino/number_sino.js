export const number_sino = {
	introduction: `Did you know that the Korean language has two regularly used generates of numerals, a native Korean system and Sino-Korean system ? The “Sino number system” (eel, ee, sam, etc) is used for talking about sums of money, telephone numbers, etc.`,

	number_list: [
		{
			id: 1,
			numeral: 1,
			korean_char: "일",
			romanization: "eel",
			audio_location: "./../audio/number_sino/1.wav",
		},
		{
			id: 2,
			numeral: 2,
			korean_char: "이",
			romanization: "ee",
			audio_location: "./../audio/number_sino/1.wav",
		},
		{
			id: 3,
			numeral: 3,
			korean_char: "삼",
			romanization: "sam",
			audio_location: "./../audio/number_sino/1.wav",
		},
		{
			id: 4,
			numeral: 4,
			korean_char: "사",
			romanization: "sa",
			audio_location: "./../audio/number_sino/1.wav",
		},
		{
			id: 5,
			numeral: 5,
			korean_char: "오",
			romanization: "o",
			audio_location: "./../audio/number_sino/1.wav",
		},
		{
			id: 6,
			numeral: 6,
			korean_char: "육",
			romanization: "yook",
			audio_location: "./../audio/number_sino/1.wav",
		},
		{
			id: 7,
			numeral: 7,
			korean_char: "칠",
			romanization: "chil",
			audio_location: "./../audio/number_sino/1.wav",
		},
		{
			id: 8,
			numeral: 8,
			korean_char: "팔",
			romanization: "pal",
			audio_location: "./../audio/number_sino/1.wav",
		},
		{
			id: 9,
			numeral: 9,
			korean_char: "구",
			romanization: "goo",
			audio_location: "./../audio/number_sino/1.wav",
		},
		{
			id: 10,
			numeral: 10,
			korean_char: "십",
			romanization: "ship",
			audio_location: "./../audio/number_sino/1.wav",
		},
	],
};



export const generateChallenge = () => {
	
	const contentType = "numeral";
	const optionsAndAnswerType = "korean_char";
	const headerType = {
		korean_char: 'korean character',
		numeral: 'numeral',
		romanization: 'romanization',

	}
	const header = `Choose the correct ${headerType[optionsAndAnswerType]} for the ${contentType}`;

	const number_list = number_sino.number_list;
	const random_number =	number_list[Math.floor(Math.random() * number_list.length)];
	const incorrect_random_numbers = number_sino.number_list.filter(
		(number) => number.id !== random_number.id
	);

	const answer = random_number;
	const content = random_number;
	const incorrect_options = incorrect_random_numbers.slice(0, 3);
	const unshuffled_options = [...incorrect_options, answer];
	
	
	const options = unshuffled_options.sort(() => Math.random() - 0.5);

	return { header, content, contentType, options, answer, optionsAndAnswerType };
};