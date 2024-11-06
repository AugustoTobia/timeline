'use client';

import { createContext, useContext, useState } from 'react';

import { v4 as uuid } from 'uuid';

import { mockedData } from 'common/mockedData';
import {
	AppState,
	CardIndicator,
	ICharacterCard,
	IContextProps,
	ILocationCard,
	TimelineEvent,
} from 'common/types';

const mockedEvent = {
	id: uuid(),
	title: 'Processing',
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

	const setButtonVisibility = (currentEvent: TimelineEvent, value: boolean) => {
		const clickedEventIndex = timelineState.events.indexOf(currentEvent);
		const newList = timelineState.events.toSpliced(clickedEventIndex, 1, {
			...currentEvent,
			showButton: value,
		});

		setTimelineState({ ...timelineState, events: newList });
	};

	const modifyEvent = (newEvent: TimelineEvent) => {
		setTimelineState((oldState) => {
			let oldEvent = oldState.events.find((event) => event.id === newEvent.id);
			if (!oldEvent) throw new Error('event non existing');
			const eventIndex = oldState.events.indexOf(oldEvent);
			const newState = {
				...timelineState,
				events: timelineState.events.toSpliced(eventIndex, 1, newEvent),
			};

			return newState;
		});
	};

	const addCharacterOrLocation = (
		currentEvent: TimelineEvent,
		newEntry: ICharacterCard | ILocationCard,
	) => {
		const newEvent = currentEvent;

		if (newEntry?.tag === 'character') {
			const repetedCharacter = newEvent.relatedCharacters.find(
				(item) => item.id === newEntry.id,
			);
			if (!repetedCharacter) {
				newEvent.relatedCharacters.push(newEntry);
				modifyEvent(newEvent);
			}
		}
		if (newEntry?.tag === 'location') {
			const repetedLocation = newEvent.relatedLocations.find(
				(item) => item.id === newEntry.id,
			);
			if (!repetedLocation) {
				newEvent.relatedLocations.push(newEntry);
				modifyEvent(newEvent);
			}
		}
	};

	const removeCharacterOrLocation = (
		currentEvent: TimelineEvent,
		removing: CardIndicator,
		tag: 'character' | 'location',
	) => {
		let newEvent;

		if (tag === 'character') {
			const itemInList = currentEvent.relatedCharacters.find(
				(item) => item.id === removing.id,
			);

			if (!itemInList) throw new Error('no such item');
			const indexToRemove = currentEvent.relatedCharacters.indexOf(itemInList);

			newEvent = {
				...currentEvent,
				relatedCharacters: currentEvent.relatedCharacters.toSpliced(
					indexToRemove,
					1,
				),
			};

			modifyEvent(newEvent);
		}

		if (tag === 'location') {
			const itemInList = currentEvent.relatedLocations.find(
				(item) => item.id === removing.id,
			);
			if (!itemInList) throw new Error('no such item');

			const indexToRemove = currentEvent.relatedLocations.indexOf(itemInList);

			newEvent = {
				...currentEvent,
				relatedLocations: currentEvent.relatedLocations.toSpliced(
					indexToRemove,
					1,
				),
			};

			modifyEvent(newEvent);
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
				addCharacterOrLocation,
				removeCharacterOrLocation,
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