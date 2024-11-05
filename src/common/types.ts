import { Dispatch, ElementType } from 'react';

export interface AppState {
  events: TimelineEvent[];
  charactersList: ICharacterCard[];
  locationsList: ILocationCard[];
}

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

export interface IContextProps {
  timelineState: AppState;
  setButtonVisibility: (currentEvent: TimelineEvent, value: boolean) => void;
  setTimelineState: Dispatch<AppState>;
  addEvent: (currentEvent: number, addAfterEvent: boolean) => void;
  deleteEvent: (currentEvent: TimelineEvent) => void;
  modifyEvent: (newEvent: TimelineEvent) => void;
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
}

interface ICharacterCard extends ICard {
  tag: 'character';
}

interface ILocationCard extends ICard {
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
  openModal: (eventData: TimelineEvent) => void;
  closeModal: () => void;
  setModalData: (newData: TimelineEvent) => void;
  isModalOpen: boolean;
  modalData: TimelineEvent | null;
}