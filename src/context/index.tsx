'use client';

import { createContext, useContext, useState } from 'react';

import { v4 as uuid } from 'uuid';

import { IContextState, TimelineEvent } from 'common/types';

const baseEvents = [
    {
        id: uuid(),
        status: 'Ordered',
        date: '15/10/2020 10:30',
        icon: 'pi pi-shopping-cart',
        color: '#9C27B0',
        image: 'game-controller.jpg',
        showButton: false,
    },
    {
        id: uuid(),
        status: 'Processing',
        date: '15/10/2020 14:00',
        icon: 'pi pi-cog',
        color: '#673AB7',
        showButton: false,
    },
    {
        id: uuid(),
        status: 'Shipped',
        date: '15/10/2020 16:15',
        icon: 'pi pi-shopping-cart',
        color: '#FF9800',
        showButton: false,
    },
    {
        id: uuid(),
        status: 'Delivered',
        date: '16/10/2020 10:00',
        icon: 'pi pi-check',
        color: '#607D8B',
        showButton: false,
    },
];
export const AppContext = createContext<IContextState | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [timelineState, setTimelineState] =
        useState<TimelineEvent[]>(baseEvents);

    const addEvent = (clickedEventIndex: number, addAfterEvent: boolean) => {
        const afterIndex = clickedEventIndex + 1;
        let newList = [];

        if (addAfterEvent) {
            newList = [
                ...timelineState.slice(0, afterIndex),
                {
                    id: uuid(),
                    status: 'Delivered',
                    date: '16/10/2020 10:00',
                    icon: 'pi pi-check',
                    color: '#607D8B',
                    showButton: false,
                },
                ...timelineState.slice(afterIndex),
            ];
        } else {
            newList = [
                ...timelineState.slice(0, clickedEventIndex),
                {
                    id: uuid(),
                    status: 'Delivered',
                    date: '16/10/2020 10:00',
                    icon: 'pi pi-check',
                    color: '#607D8B',
                    showButton: false,
                },
                ...timelineState.slice(clickedEventIndex),
            ];
        }

        setTimelineState(newList);
    };

    const deleteEvent = (currentEvent: TimelineEvent) => {
        const newList = timelineState.filter(
            (event: TimelineEvent) => event.id !== currentEvent.id,
        );
        setTimelineState(newList);
    };

    const setButtonVisibility = (
        currentEvent: TimelineEvent,
        value: boolean,
    ) => {
        const clickedEventIndex = timelineState.indexOf(currentEvent);
        const newList = timelineState.toSpliced(clickedEventIndex, 1, {
            ...currentEvent,
            showButton: value,
        });

        setTimelineState(newList);
    };

    return (
        <AppContext.Provider
            value={{
                timelineState,
                setTimelineState,
                addEvent,
                deleteEvent,
                setButtonVisibility,
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
