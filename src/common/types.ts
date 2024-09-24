import { Dispatch } from "react";

export interface TimelineEvent {
	id: number;
	status?: string;
	date?: string;
	icon?: string;
	color?: string;
	image?: string;
}

export interface IContextState {
	timelineState?: TimelineEvent[];
	setTimelineState?: Dispatch<TimelineEvent[]>;
}

export type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}