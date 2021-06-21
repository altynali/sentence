export const isFinished = (
	answer0: string,
	answer1: string,
	answer2: string,
	answer3: string,
	index: number,
) => {
	if (answer0 !== '' && answer1 !== '' && answer2 !== '' && answer3 !== '' && index === 3) return false;

	return true;
};
