import number_sino from './number_sino';

export const generateChallenge = () => {
	const number_list = number_sino.number_list;
	const random_number =	number_list[Math.floor(Math.random() * number_list.length)];
	const incorrect_random_numbers = number_sino.number_list.filter(
		number => number.id !== random_number.id
	);

	const answer = random_number;
	const incorrect_options = incorrect_random_numbers.slice(0,3);
	const unshuffled_options = [...incorrect_options, answer];

	const header = "Choose the correct korean character for the number"; 
	const content = random_number;
	const options = unshuffled_options.sort(() => Math.random() - 0.5);

	return {header, content, options, answer};
}



