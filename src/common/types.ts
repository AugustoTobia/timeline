import { Dispatch, ElementType } from 'react';

export interface AppState {
	events: TimelineEvent[];
	charactersList: ICharacterCard[];
	locationsList: ILocationCard[];
}

export interface TimelineEvent extends EventCard {
	date?: string;
	icon?: string;
	color?: string;
	showButton?: boolean;
}

export interface EventCard extends ICard {
	tag: 'event';
}

export type CardIndicator = Pick<ICard, 'id' | 'name' | 'tag'>;
export interface ICard {
	id: string;
	name: string;
	tag: 'character' | 'location' | 'event';
	description: string;
	relatedCharacters: CardIndicator[];
	relatedLocations: CardIndicator[];
}

export interface IContextProps {
	timelineState: AppState;
	setButtonVisibility: (currentEvent: TimelineEvent, value: boolean) => void;
	setTimelineState: Dispatch<AppState>;
	addEvent: (currentEvent: number, addAfterEvent: boolean) => void;
	deleteEvent: (currentEvent: TimelineEvent) => void;
	modifyEvent: (newEvent: TimelineEvent) => void;
	addRelation: (currentEvent: TimelineEvent | ICharacterOrLocation, newEntry: ICharacterOrLocation | TimelineEvent) => void;
	removeRelation: (currentEvent: TimelineEvent | ICharacterOrLocation, newEntry: CardIndicator) => void;
	modifyEntity: (newEntity: TimelineEvent | ICharacterOrLocation) => void;
}

export type Props = {
	children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

export interface ITextInput {
	className?: string;
	initialText?: string;
	semanticTag?: ElementType;
	height?: number;
	width?: number;
	allowOverflow?: boolean;
	overrideOptions?: string;
	onBlur: (newConter: string) => void;
}

export interface ICharacterOrLocation extends ICard {
	relatedEvents: CardIndicator[];
}
export interface ICharacterCard extends ICharacterOrLocation {
	tag: 'character';
}

export interface ILocationCard extends ICharacterOrLocation {
	tag: 'location';
}

export interface DataScheme {
	events: TimelineEvent[];
	characters: ICharacterCard[];
	locations: ILocationCard[];
}

export interface ICustomMarker {
	item: TimelineEvent;
	timelineState: TimelineEvent[];
	setButtonVisibility: (currentEvent: TimelineEvent, value: boolean) => void;
	addEvent: (currentEvent: number, after: boolean) => void;
	deleteEvent: (currentEvent: TimelineEvent) => void;
}

export interface IModalContextProps {
	openModal: (eventData: TimelineEvent | ICharacterOrLocation) => void;
	closeModal: () => void;
	setModalData: (newData: TimelineEvent | ICharacterOrLocation) => void;
	isModalOpen: boolean;
	modalData: TimelineEvent | ICharacterOrLocation | null;
}

export enum entities {
	location = 'locationsList',
	character = 'charactersList',
	event = 'events'
}

export enum eventRelations {
	character = 'relatedCharacters',
	location = 'relatedLocations',
}
export enum characterOrLocationRelations {
	character = 'relatedCharacters',
	location = 'relatedLocations',
	event = 'relatedEvents'
}