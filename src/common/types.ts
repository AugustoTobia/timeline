import { Dispatch } from 'react';

export interface TimelineEvent {
    id: string;
    title?: string;
    description?: string;
    date?: string;
    icon?: string;
    color?: string;
    relatedCharacters: CardIndicator[];
    relatedLocations: CardIndicator[];
    showButton?: boolean;
}

type EventIndicator = Pick<TimelineEvent, 'id' | 'title'>;
type CardIndicator = Pick<ICard, 'id' | 'name'>;
export interface ICard {
    id: string;
    name: string;
    tag: 'character' | 'location';
    description: string;
    relatedDates: EventIndicator[];
    relatedCharacters: CardIndicator[];
    relatedLocations: CardIndicator[];
}

export interface IContextState {
    timelineState: TimelineEvent[];
    setButtonVisibility: (currentEvent: TimelineEvent, value: boolean) => void;
    setTimelineState: Dispatch<TimelineEvent[]>;
    addEvent: (currentEvent: number, addAfterEvent: boolean) => void;
    deleteEvent: (currentEvent: TimelineEvent) => void;
}

export type Props = {
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};
