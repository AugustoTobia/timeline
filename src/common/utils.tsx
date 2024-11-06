export const trimText = (text: string, chLimit: number) => {
	return text.length > chLimit ? text.slice(0, chLimit) + '...' : text;
};
