'use client';

import {
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';

import { v4 as uuid } from 'uuid';

import { mockedData } from 'common/mockedData';
import {
	AppState,
	CardIndicator,
	ICard,
	ICharacterCard,
	IContextProps,
	ILocationCard,
	TimelineEvent,
	entities,
	entityRelation,
} from 'common/types';
import { PrimeIcons } from 'primereact/api';
import { randomColor } from 'common/utils';

const mockedEvent: TimelineEvent = {
	id: uuid(),
	name: 'Processing',
	tag: 'event',
	description: 'some thing is writen in here',
	icon: 'pi pi-cog',
	color: randomColor(),
	relatedCharacters: [],
	relatedLocations: [],
	relatedEvents: [],
	showButton: false,
};

const getInitialState = (): AppState => {
	const previousState =
		(typeof window !== 'undefined' && localStorage.getItem('timelineState')) ||
		JSON.stringify(mockedData);
	return JSON.parse(previousState);
};

export const AppContext = createContext<IContextProps | null>(null);
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const [timelineState, setTimelineState] = useState<AppState>(getInitialState);

	useEffect(() => {
		localStorage.setItem('timelineState', JSON.stringify(timelineState));
	}, [timelineState]);

	const addEvent = (clickedEventIndex: number, addAfterEvent: boolean, newEvent: ICard) => {
		console.log(clickedEventIndex, addAfterEvent, newEvent);
		const filledEvent = {
			...newEvent,
			icon: PrimeIcons.CIRCLE,
			color: randomColor(),
			showButton: false,
		} as TimelineEvent;
		const afterIndex = clickedEventIndex + 1;
		let newList = [];

		if (addAfterEvent) {
			newList = [
				...timelineState.events.slice(0, afterIndex),
				filledEvent,
				...timelineState.events.slice(afterIndex),
			];
		} else {
			newList = [
				...timelineState.events.slice(0, clickedEventIndex),
				filledEvent,
				...timelineState.events.slice(clickedEventIndex),
			];
		}

		setTimelineState({ ...timelineState, events: newList });
	};

	const modifyEvent = (newEvent: TimelineEvent) => {
		setTimelineState((oldState) => {
			const oldEvent = oldState.events.find(
				(event) => event.id === newEvent.id,
			);
			if (!oldEvent) throw new Error('event non existing');

			const eventIndex = oldState.events.indexOf(oldEvent);
			const newState = {
				...oldState,
				events: oldState.events.toSpliced(eventIndex, 1, newEvent),
			};

			return newState;
		});
	};

	const deleteEvent = (currentEvent: TimelineEvent) => {
		const newList = timelineState.events.filter(
			(event) => event.id !== currentEvent.id,
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

	const modifyCharacter = (newCharacter: ICharacterCard) => {
		setTimelineState((oldState) => {
			const oldCharacter = oldState.charactersList.find(
				(character) => character.id === newCharacter.id,
			);

			if (!oldCharacter) return oldState;
			const characterIndex = oldState.charactersList.indexOf(oldCharacter);

			const newState = {
				...oldState,
				charactersList: oldState.charactersList.toSpliced(
					characterIndex,
					1,
					newCharacter,
				),
			};

			return newState;
		});
	};

	const modifyLocation = (newLocation: ILocationCard) => {
		setTimelineState((oldState) => {
			const oldLocation = oldState.locationsList.find(
				(location) => location.id === newLocation.id,
			);
			if (!oldLocation) throw new Error('location non existing');
			const locationIndex = oldState.locationsList.indexOf(oldLocation);
			const newState = {
				...oldState,
				locationsList: oldState.locationsList.toSpliced(
					locationIndex,
					1,
					newLocation,
				),
			};

			return newState;
		});
	};

	const modifyEntity = (newEntity: ICard) => {
		switch (newEntity.tag) {
			case 'character':
				modifyCharacter(newEntity as ICharacterCard);
				break;
			case 'location':
				modifyLocation(newEntity as ILocationCard);
				break;
			case 'event':
				modifyEvent(newEntity as TimelineEvent);
				break;
		}
	};

	const addRelation = (entityToUpdate: ICard, newRelation: ICard) => {
		let newEntity = entityToUpdate;
		let newMirrorRelation;

		const repeatedRelation = newEntity[entityRelation[newRelation.tag]].find(
			(item) => item.id === newRelation.id,
		);


		const repeatedMirrorRelation = newRelation[
			entityRelation[newEntity.tag]
		].find((item) => item.id === newEntity.id);

		if (!repeatedRelation && entityToUpdate.id !== newRelation.id) {
			newEntity[entityRelation[newRelation.tag]].push(newRelation);
			modifyEntity(newEntity);
		};


		if (!repeatedMirrorRelation) {
			newMirrorRelation = {
				...newRelation,
				[entityRelation[newEntity.tag]]: [
					...newRelation[entityRelation[newEntity.tag]],
					{
						id: newEntity.id,
						name: newEntity.name,
						tag: newEntity.tag,
					},
				],
			};
			modifyEntity(newMirrorRelation);
		}
	};

	const removeRelation = (entity: ICard, relation: CardIndicator) => {
		const entityInState = timelineState[entities[entity.tag]].find(
			(item) => item.id === entity.id,
		);
		const relationInState = timelineState[entities[relation.tag]].find(
			(item) => item.id === relation.id
		);
		if (!entityInState || !relationInState) return;

		const newEntity = {
			...entityInState,
			[entityRelation[relation.tag]]: entityInState[
				entityRelation[relation.tag]
			].filter((item) => item.id !== relation.id),
		};
		const newRelation = {
			...relationInState,
			[entityRelation[entity.tag]]: relationInState[
				entityRelation[entity.tag]
			].filter((item) => item.id !== entity.id),
		};

		modifyEntity(newRelation);
		modifyEntity(newEntity);
	};

	const createEntity = (entityData: ICard) => {
		let newEntity = entityData;
		if (entityData.tag === 'event') {
			newEntity = {
				...entityData,
				icon: 'default',
				color: randomColor(),
				showButton: false,
			} as TimelineEvent
		}

		const newState = {
			...timelineState,
			[entities[newEntity.tag]]: [
				...timelineState[entities[newEntity.tag]],
				newEntity,
			],
		};
		setTimelineState(newState);

		newEntity.relatedCharacters.map(relation => {
			const relationInState = timelineState[entities[relation.tag]].find(
				(item) => item.id === relation.id
			);

			addRelation(newEntity, relationInState as ICard)
		})
		newEntity.relatedLocations.map(relation => {
			const relationInState = timelineState[entities[relation.tag]].find(
				(item) => item.id === relation.id
			);
			addRelation(newEntity, relationInState as ICard)
		})
		newEntity.relatedEvents.map(relation => {
			const relationInState = timelineState[entities[relation.tag]].find(
				(item) => item.id === relation.id
			);
			addRelation(newEntity, relationInState as ICard)
		})
	};

	const deleteEntity = (entityToDelete: ICard) => {
		let newState;
		const cleanCharacters = timelineState.charactersList.map(
			(character: ICharacterCard) => {
				const cleanCharacter = {
					...character,
					[entityRelation[entityToDelete.tag]]: character[
						entityRelation[entityToDelete.tag]
					].filter((item) => item.id !== entityToDelete.id),
				};
				return cleanCharacter;
			},
		);

		const cleanLocations = timelineState.locationsList.map(
			(location: ILocationCard) => {
				const cleanLocation = {
					...location,
					[entityRelation[entityToDelete.tag]]: location[
						entityRelation[entityToDelete.tag]
					].filter((item) => item.id !== entityToDelete.id),
				};
				return cleanLocation;
			},
		);

		const cleanEvents = timelineState.events.map((event: TimelineEvent) => {
			const cleanEvent = {
				...event,
				[entityRelation[entityToDelete.tag]]: event[
					entityRelation[entityToDelete.tag]
				].filter((item) => item.id !== entityToDelete.id),
			};

			return cleanEvent;
		});

		newState = {
			...timelineState,
			charactersList: cleanCharacters,
			locationsList: cleanLocations,
			events: cleanEvents,
		};

		newState = {
			...newState,
			[entities[entityToDelete.tag]]: newState[
				entities[entityToDelete.tag]
			].filter((item) => item.id !== entityToDelete.id),
		};

		setTimelineState(newState);
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
				createEntity,
				deleteEntity,
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