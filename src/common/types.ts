import { Dispatch } from 'react';

export interface TimelineEvent {
    id: string;
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
    showButton?: boolean;
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
