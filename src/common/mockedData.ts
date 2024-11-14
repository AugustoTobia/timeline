import { AppState } from './types';

export const mockedData: AppState = {
	events: [
		{
			id: '11',
			name: 'Race on the great white',
			description: 'A Race hosted on the great salar',
			date: '15/10/2020 10: 30',
			icon: 'pi pi-shopping-cart',
			tag: 'event',
			color: '#9C27B0',
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
			showButton: false,
		},
		{
			id: '12',
			name: 'Processing',
			description: 'some thing is writen in here',
			date: '15/10/2020 14: 00',
			icon: 'pi pi-cog',
			tag: 'event',
			color: '#673AB7',
			relatedCharacters: [],
			relatedLocations: [],
			showButton: false,
		},
		{
			id: '13',
			name: 'Shipped',
			description: 'some thing is writen in here',
			date: '15/10/2020 16: 15',
			icon: 'pi pi-shopping-cart',
			tag: 'event',
			color: '#FF9800',
			relatedCharacters: [],
			relatedLocations: [],
			showButton: false,
		},
		{
			id: '14',
			name: 'Delivered',
			description: 'some thing is writen in here',
			date: '16/10/2020 10: 00',
			icon: 'pi pi-check',
			tag: 'event',
			color: '#607D8B',
			relatedCharacters: [],
			relatedLocations: [],
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
	],
	locationsList: [
		{
			id: '31',
			name: 'Great Salar',
			tag: 'location',
			description: 'A little gnome addicted to speed',
			relatedEvents: [
				{
					id: '1',
					tag: 'event',
					name: 'Race on the great white',
				},
			],
			relatedCharacters: [
				{
					id: '1',
					tag: 'character',
					name: 'Sonrisas',
				},
				{
					tag: 'character',
					name: 'Bob Bubbleboms',
					id: '0',
				},
			],
			relatedLocations: [
				{
					id: '1',
					name: 'The great salar',
					tag: 'location',
				},
				{
					id: '1',
					name: 'The Old Mountain',
					tag: 'location',
				},
				{
					id: '1',
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
					tag: 'character'
				},
				{
					name: 'Bob Bubbleboms',
					tag: 'character',
					id: '21',
				},
			],
			relatedLocations: [
				{
					id: '11',
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