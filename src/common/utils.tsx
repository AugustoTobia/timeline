import { ICard } from "./types";
import { v4 as uuid } from 'uuid';

export const trimText = (text: string, chLimit: number) => {
	return text.length > chLimit ? text.slice(0, chLimit) + '...' : text;
};

export const newEmptyEntity = (tag: 'event' | 'character' | 'location') => {
	const emptyEntity: ICard = {
		id: uuid(),
		name: '',
		tag: tag,
		description: '',
		relatedCharacters: [],
		relatedLocations: [],
		relatedEvents: [],
	}
	return emptyEntity
}

export const randomColor = () => {
	const red = Math.floor(Math.random() * 255).toString(16)
	const green = Math.floor(Math.random() * 255).toString(16)
	const blue = Math.floor(Math.random() * 255).toString(16)
	
	return `#${red}${green}${blue}`
}