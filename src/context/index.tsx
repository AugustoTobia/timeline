'use client';

import { createContext, useContext, useState } from 'react';

import { v4 as uuid } from 'uuid';

import { mockedData } from 'common/mockedData';
import {
	AppState,
	CardIndicator,
	characterOrLocationRelations,
	eventRelations,
	ICharacterCard,
	ICharacterOrLocation,
	IContextProps,
	ILocationCard,
	TimelineEvent,
} from 'common/types';

const mockedEvent: TimelineEvent = {
	id: uuid(),
	name: 'Processing',
	tag: 'event',
	description: 'some thing is writen in here',
	date: '15/10/2020 14:00',
	icon: 'pi pi-cog',
	color: '#673AB7',
	relatedCharacters: [],
	relatedLocations: [],
	showButton: false,
};

export const AppContext = createContext<IContextProps | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const [timelineState, setTimelineState] = useState<AppState>(mockedData);

	const addEvent = (clickedEventIndex: number, addAfterEvent: boolean) => {
		const afterIndex = clickedEventIndex + 1;
		let newList = [];

		if (addAfterEvent) {
			newList = [
				...timelineState.events.slice(0, afterIndex),
				mockedEvent,
				...timelineState.events.slice(afterIndex),
			];
		} else {
			newList = [
				...timelineState.events.slice(0, clickedEventIndex),
				mockedEvent,
				...timelineState.events.slice(clickedEventIndex),
			];
		}

		setTimelineState({ ...timelineState, events: newList });
	};

	const deleteEvent = (currentEvent: TimelineEvent) => {
		const newList = timelineState.events.filter(
			(event: TimelineEvent) => event.id !== currentEvent.id,
		);
		setTimelineState({ ...timelineState, events: newList });
	};

	const modifyEvent = (newEvent: TimelineEvent) => {
		setTimelineState((oldState) => {
			const oldEvent = oldState.events.find((event) => event.id === newEvent.id);
			if (!oldEvent) throw new Error('event non existing');

			const eventIndex = oldState.events.indexOf(oldEvent);
			const newState = {
				...timelineState,
				events: timelineState.events.toSpliced(eventIndex, 1, newEvent),
			};

			return newState;
		});
	};

	const setButtonVisibility = (currentEvent: TimelineEvent, value: boolean) => {
		const clickedEventIndex = timelineState.events.indexOf(currentEvent);
		const newList = timelineState.events.toSpliced(clickedEventIndex, 1, {
			...currentEvent,
			showButton: value,
		});

		setTimelineState({ ...timelineState, events: newList });
	};

	const modifyCharacter = (newCharacter: ICharacterCard) => {
		setTimelineState(oldState => {

			const oldCharacter = oldState.charactersList.find((character) => character.id === newCharacter.id);

			if (!oldCharacter) throw new Error('character non existing');
			const characterIndex = oldState.charactersList.indexOf(oldCharacter);

			const newState = {
				...timelineState,
				charactersList: timelineState.charactersList.toSpliced(characterIndex, 1, newCharacter),
			};

			return newState;
		})
	}

	const modifyLocation = (newLocation: ILocationCard) => {
		setTimelineState(oldState => {
			const oldLocation = oldState.locationsList.find((location) => location.id === newLocation.id);
			if (!oldLocation) throw new Error('location non existing');
			const locationIndex = oldState.locationsList.indexOf(oldLocation);
			const newState = {
				...timelineState,
				locationsList: timelineState.locationsList.toSpliced(locationIndex, 1, newLocation),
			};

			return newState;
		})
	}

	const modifyEntity = (newEntity: TimelineEvent | ICharacterOrLocation) => {
		switch (newEntity.tag) {
			case 'character':
				modifyCharacter(newEntity as ICharacterCard)
				break;
			case 'location':
				modifyLocation(newEntity as ILocationCard)
				break;
			case 'event':
				modifyEvent(newEntity as TimelineEvent)
				break;
		}
	}

	const addRelation = (
		entityToModify: TimelineEvent | ICharacterOrLocation,
		newRelation: TimelineEvent | ICharacterOrLocation,
	) => {
		let newEntity;
		let repetedRelation;
		switch (entityToModify.tag) {
			case 'event':
				newEntity = entityToModify as TimelineEvent;

				if (newRelation.tag === 'event') return;
				repetedRelation = newEntity[eventRelations[newRelation.tag]].find((item) => item.id === newRelation.id);

				if (!repetedRelation) {
					newEntity[eventRelations[newRelation.tag]].push(newRelation);
					modifyEvent(newEntity);
				}
				break;

			case 'character':

				newEntity = entityToModify as ICharacterCard;
				repetedRelation = newEntity[characterOrLocationRelations[newRelation.tag]].find((item) => item.id === newRelation.id);

				if (!repetedRelation) {
					newEntity[characterOrLocationRelations[newRelation.tag]].push(newRelation);
					modifyCharacter(newEntity);
				}
				break;

			case 'location':
				newEntity = entityToModify as ILocationCard;
				repetedRelation = newEntity[characterOrLocationRelations[newRelation.tag]].find((item) => item.id === newRelation.id);

				if (!repetedRelation) {
					newEntity[characterOrLocationRelations[newRelation.tag]].push(newRelation);
					modifyLocation(newEntity);
				}
				break;
		}
	};

	const removeRelation = (
		entityToModify: TimelineEvent | ICharacterOrLocation,
		removing: CardIndicator,
	) => {
		let newEntity;
		let itemInList;
		let indexToRemove;

		switch (entityToModify.tag) {
			case 'event':
				if (removing.tag === 'event') return;

				itemInList = entityToModify[eventRelations[removing.tag]].find(
					(item) => item.id === removing.id,
				);

				if (!itemInList) throw new Error('no such item');
				indexToRemove = entityToModify[eventRelations[removing.tag]].indexOf(itemInList);

				newEntity = {
					...entityToModify,
					[eventRelations[removing.tag]]: entityToModify[eventRelations[removing.tag]].toSpliced(
						indexToRemove,
						1,
					),
				} as TimelineEvent;

				modifyEvent(newEntity);
				break;

			case 'character':
				itemInList = entityToModify[characterOrLocationRelations[removing.tag]].find((item) => item.id === removing.id)

				if (!itemInList) throw new Error('no such item');
				indexToRemove = entityToModify[characterOrLocationRelations[removing.tag]].indexOf(itemInList);

				newEntity = {
					...entityToModify,
					[characterOrLocationRelations[removing.tag]]: entityToModify[characterOrLocationRelations[removing.tag]].toSpliced(
						indexToRemove,
						1,
					),
				} as ICharacterCard;

				modifyCharacter(newEntity);
				break;

			case 'location':
				itemInList = entityToModify[characterOrLocationRelations[removing.tag]].find((item) => item.id === removing.id)

				if (!itemInList) throw new Error('no such item');
				indexToRemove = entityToModify[characterOrLocationRelations[removing.tag]].indexOf(itemInList);

				newEntity = {
					...entityToModify,
					[characterOrLocationRelations[removing.tag]]: entityToModify[characterOrLocationRelations[removing.tag]].toSpliced(
						indexToRemove,
						1,
					),
				} as ILocationCard;

				modifyLocation(newEntity);
				break;
		}
	};

	return (
		<AppContext.Provider
			value={{
				timelineState,
				setTimelineState,
				addEvent,
				deleteEvent,
				setButtonVisibility,
				modifyEvent,
				modifyEntity,
				addRelation,
				removeRelation,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const appContext = useContext(AppContext);

	if (!appContext) {
		throw new Error(
			'useCurrentUser has to be used within <AppContext.Provider>',
		);
	}

	return appContext;
};