import { AppState } from './types';
import { PrimeIcons } from 'primereact/api';
import { randomColor } from './utils';

export const mockedData: AppState = {
	events: [
		{
			id: '11',
			name: 'Race on the great white',
			description: 'A Race hosted on the great salar',
			icon: PrimeIcons.CIRCLE_FILL,
			tag: 'event',
			color: randomColor(),
			relatedCharacters: [
				{
					id: '21',
					tag: 'character',
					name: 'Bob Bubbleboms',
				},
				{
					id: '22',
					tag: 'character',
					name: 'Sonrisas',
				},
			],
			relatedLocations: [
				{
					id: '31',
					name: 'The great salar',
					tag: 'location',
				},
			],
			relatedEvents: [],
			showButton: false,
		},
		{
			id: '12',
			name: 'Processing',
			description: 'some thing is writen in here',
			icon: PrimeIcons.CIRCLE_FILL,
			tag: 'event',
			color: randomColor(),
			relatedCharacters: [],
			relatedLocations: [],
			relatedEvents: [],
			showButton: false,
		},
		{
			id: '13',
			name: 'Shipped',
			description: 'some thing is writen in here',
			icon: PrimeIcons.CIRCLE_FILL,
			tag: 'event',
			color: randomColor(),
			relatedCharacters: [],
			relatedLocations: [],
			relatedEvents: [],
			showButton: false,
		},
		{
			id: '14',
			name: 'Delivered',
			description: 'some thing is writen in here',
			icon: PrimeIcons.CIRCLE_FILL,
			tag: 'event',
			color: randomColor(),
			relatedCharacters: [],
			relatedLocations: [],
			relatedEvents: [],
			showButton: false,
		},
	],
	charactersList: [
		{
			id: '21',
			name: 'Bob Bubbleboms',
			tag: 'character',
			description: 'A little gnome addicted to speed',
			relatedEvents: [
				{
					id: '11',
					tag: 'event',
					name: 'Race on the great white',
				},
			],
			relatedCharacters: [
				{
					id: '22',
					tag: 'character',
					name: 'Sonrisas',
				},
			],
			relatedLocations: [
				{
					id: '31',
					name: 'The great salar',
					tag: 'location',
				},
			],
		},
		{
			id: '22',
			name: 'Sonrisas',
			tag: 'character',
			description:
				'A six legged white crocodile with a predilection for running',
			relatedEvents: [
				{
					id: '11',
					tag: 'event',
					name: 'Race on the great white',
				},
			],
			relatedCharacters: [
				{
					id: '21',
					tag: 'character',
					name: 'Bob Bubbleboms',
				},
			],
			relatedLocations: [
				{
					id: '31',
					name: 'The great salar',
					tag: 'location',
				},
				{
					id: '32',
					name: 'The Old Mountain',
					tag: 'location',
				},
				{
					id: '33',
					name: 'The Red forest',
					tag: 'location',
				},
			],
		},
		{
			id: '23',
			name: 'The living wagon',
			tag: 'character',
			description: 'A mimic in a form of a wagon',
			relatedEvents: [
				{
					id: '11',
					tag: 'event',
					name: 'Race on the great white',
				},
			],
			relatedCharacters: [
				{
					id: '21',
					tag: 'character',
					name: 'Bob Bubleboms',
				},
				{
					id: '22',
					tag: 'character',
					name: 'Sonrisas',
				},
			],
			relatedLocations: [
				{
					id: '31',
					name: 'The great salar',
					tag: 'location',
				},
			],
		},
	],
	locationsList: [
		{
			id: '31',
			name: 'Great Salar',
			tag: 'location',
			description: 'A little gnome addicted to speed',
			relatedEvents: [
				{
					id: '11',
					tag: 'event',
					name: 'Race on the great white',
				},
			],
			relatedCharacters: [
				{
					id: '22',
					tag: 'character',
					name: 'Sonrisas',
				},
				{
					tag: 'character',
					name: 'Bob Bubbleboms',
					id: '21',
				},
			],
			relatedLocations: [
				{
					id: '31',
					name: 'The great salar',
					tag: 'location',
				},
				{
					id: '32',
					name: 'The Old Mountain',
					tag: 'location',
				},
				{
					id: '33',
					name: 'The Red forest',
					tag: 'location',
				},
			],
		},
		{
			id: '32',
			name: 'The Old Mountain',
			tag: 'location',
			description: 'A great old mountain colored yellow ',
			relatedEvents: [
				{
					id: '11',
					tag: 'event',
					name: 'Race on the great white',
				},
			],
			relatedCharacters: [
				{
					id: '22',
					name: 'Sonrisas',
					tag: 'character',
				},
				{
					name: 'Bob Bubbleboms',
					tag: 'character',
					id: '21',
				},
			],
			relatedLocations: [
				{
					id: '31',
					name: 'The great salar',
					tag: 'location',
				},
				{
					id: '32',
					name: 'The Old Mountain',
					tag: 'location',
				},
				{
					id: '33',
					name: 'The Red forest',
					tag: 'location',
				},
			],
		},
		{
			id: '33',
			name: 'The Red forest',
			tag: 'location',
			description: 'A beautifull but terrifying red forest',
			relatedEvents: [
				{
					id: '11',
					tag: 'event',
					name: 'Race on the great white',
				},
			],
			relatedCharacters: [
				{
					id: '22',
					name: 'Sonrisas',
					tag: 'character',
				},
				{
					id: '21',
					name: 'Bob Bubbleboms',
					tag: 'character',
				},
			],
			relatedLocations: [
				{
					id: '31',
					name: 'The great salar',
					tag: 'location',
				},
				{
					id: '32',
					name: 'The Old Mountain',
					tag: 'location',
				},
				{
					id: '33',
					name: 'The Red forest',
					tag: 'location',
				},
			],
		},
	],
};