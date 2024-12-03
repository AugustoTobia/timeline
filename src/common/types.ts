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
	relatedEvents: CardIndicator[];
}

export interface IContextProps {
	timelineState: AppState;
	setButtonVisibility: (currentEvent: TimelineEvent, value: boolean) => void;
	setTimelineState: Dispatch<AppState>;
	addEvent: (currentEvent: number, addAfterEvent: boolean) => void;
	deleteEvent: (currentEvent: TimelineEvent) => void;
	modifyEvent: (newEvent: TimelineEvent) => void;
	addRelation: (currentEvent: ICard, newEntry: ICard) => void;
	removeRelation: (currentEvent: ICard, newEntry: CardIndicator) => void;
	modifyEntity: (newEntity: ICard) => void;
	createEntity: (newEntity: ICard) => void;
	deleteEntity: (entityToDelete: ICard) => void;
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

export interface ICharacterCard extends ICard {
	tag: 'character';
}

export interface ILocationCard extends ICard {
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

export interface ModalData {
	entityData: ICard;
	action: 'edit' | 'add' | 'delete';
}
export interface IModalContextProps {
	openModal: (eventData: ModalData) => void;
	closeModal: (data?: ModalData) => void;
	setModalData: (newData: ModalData) => void;
	isModalOpen: boolean;
	modalData: ModalData;
}


export enum entities {
	location = 'locationsList',
	character = 'charactersList',
	event = 'events'
}

export enum entityRelation {
	character = 'relatedCharacters',
	location = 'relatedLocations',
	event = 'relatedEvents'
}