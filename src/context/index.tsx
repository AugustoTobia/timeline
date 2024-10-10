"use client"
import { createContext, useContext, useState } from "react";
import { IContextState, TimelineEvent } from "common/types";
import { v4 as uuid } from 'uuid';

const baseEvents = [
	{
		id: uuid(),
		status: 'Ordered',
		date: '15/10/2020 10:30',
		icon: 'pi pi-shopping-cart',
		color: '#9C27B0',
		image: 'game-controller.jpg',
		shouButton: false
	},
	{
		id: uuid(),
		status: 'Processing',
		date: '15/10/2020 14:00',
		icon: 'pi pi-cog',
		color: '#673AB7',
		shouButton: false
	},
	{
		id: uuid(),
		status: 'Shipped',
		date: '15/10/2020 16:15',
		icon: 'pi pi-shopping-cart',
		color: '#FF9800',
		shouButton: false
	},
	{
		id: uuid(),
		status: 'Delivered',
		date: '16/10/2020 10:00',
		icon: 'pi pi-check',
		color: '#607D8B',
		shouButton: false
	}
]
export const AppContext = createContext<IContextState | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	let [timelineState, setTimelineState] = useState<any>(baseEvents)

	const addEvent = (currentEvent: TimelineEvent, after: boolean) => {
		let clickedEventIndex = timelineState.indexOf(currentEvent);
		let afterIndex = clickedEventIndex + 1
		let newList = []

		if (after) {
			newList = [
				...timelineState.slice(0, afterIndex),
				{ id: uuid(), status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B', shouButton: false },
				...timelineState.slice(afterIndex)
			];
		} else {
			newList = [
				...timelineState.slice(0, clickedEventIndex),
				{ id: uuid(), status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B', shouButton: false },
				...timelineState.slice(clickedEventIndex)
			];
		}

		setTimelineState(newList);
	}

	const deleteEvent = (currentEvent: TimelineEvent) => {
		const newList = timelineState.filter((event: TimelineEvent) => event.id !== currentEvent.id)
		setTimelineState(newList);
	}

	const setButtonVisibility = (currentEvent: TimelineEvent, value: boolean) => {
		let clickedEventIndex = timelineState.indexOf(currentEvent);
		let newList = timelineState.toSpliced(clickedEventIndex, 1, { ...currentEvent, showButton: value })

		setTimelineState(newList);
	}

	return (
		<AppContext.Provider value={{ timelineState, setTimelineState, addEvent, deleteEvent, setButtonVisibility }} >
			{children}
		</AppContext.Provider>
	)
}

export const useAppContext = () => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error(
      "useCurrentUser has to be used within <AppContext.Provider>"
    );
  }

  return appContext;
};