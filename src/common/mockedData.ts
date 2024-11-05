import { AppState } from "./types";

export const mockedData: AppState = {
	"events": [
		{
			"id": "11",
			"title": "Race on the great white",
			"description": "A Race hosted on the great salar",
			"date": "15/10/2020 10: 30",
			"icon": "pi pi-shopping-cart",
			"color": "#9C27B0",
			"relatedCharacters": [
				{
					"id": "21",
					"name": "Bob Bubbleboms"
				},
				{
					"id": "22",
					"name": "Sonrisas"
				}
			],
			"relatedLocations": [
				{
					"id": "31",
					"name": "The great salar"
				}
			],
			"showButton": false
		},
		{
			"id": "12",
			"title": "Processing",
			"description": "some thing is writen in here",
			"date": "15/10/2020 14: 00",
			"icon": "pi pi-cog",
			"color": "#673AB7",
			"relatedCharacters": [],
			"relatedLocations": [],
			"showButton": false
		},
		{
			"id": "13",
			"title": "Shipped",
			"description": "some thing is writen in here",
			"date": "15/10/2020 16: 15",
			"icon": "pi pi-shopping-cart",
			"color": "#FF9800",
			"relatedCharacters": [],
			"relatedLocations": [],
			"showButton": false
		},
		{
			"id": "14",
			"title": "Delivered",
			"description": "some thing is writen in here",
			"date": "16/10/2020 10: 00",
			"icon": "pi pi-check",
			"color": "#607D8B",
			"relatedCharacters": [],
			"relatedLocations": [],
			"showButton": false
		}
	],
	"charactersList": [
		{
			"id": "21",
			"name": "Bob Bubbleboms",
			"tag": "character",
			"description": "A little gnome addicted to speed",
			"relatedDates": [
				{
					"id": "11",
					"title": "Race on the great white"
				}
			],
			"relatedCharacters": [
				{
					"id": "22",
					"name": "Sonrisas"
				}
			],
			"relatedLocations": [
				{
					"id": "31",
					"name": "The great salar"
				},
				{
					"id": "31",
					"name": "The great salar"
				},
				{
					"id": "31",
					"name": "The great salar"
				}
			]
		},
		{
			"id": "22",
			"name": "Sonrisas",
			"tag": "character",
			"description": "A six legged white crocodile with a predilection for running",
			"relatedDates": [
				{
					"id": "11",
					"title": "Race on the great white"
				}
			],
			"relatedCharacters": [
				{
					"id": "21",
					"name": "Bob Bubbleboms"
				}
			],
			"relatedLocations": [
				{
					"id": "31",
					"name": "The great salar"
				},
				{
					"id": "32",
					"name": "The Old Mountain"
				},
				{
					"id": "33",
					"name": "The Red forest"
				}
			]
		}
	],
	"locationsList": [
		{
			"id": "31",
			"name": "Great Salar",
			"tag": "location",
			"description": "A little gnome addicted to speed",
			"relatedDates": [
				{
					"id": "1",
					"title": "Race on the great white"
				}
			],
			"relatedCharacters": [
				{
					"id": "1",
					"name": "Sonrisas"
				},
				{
					"name": "Bob Bubbleboms",
					"id": "0"
				}
			],
			"relatedLocations": [
				{
					"id": "1",
					"name": "The great salar"
				},
				{
					"id": "1",
					"name": "The Old Mountain"
				},
				{
					"id": "1",
					"name": "The Red forest"
				}
			]
		},
		{
			"id": "32",
			"name": "The Old Mountain",
			"tag": "location",
			"description": "A great old mountain colored yellow ",
			"relatedDates": [
				{
					"id": "11",
					"title": "Race on the great white"
				}
			],
			"relatedCharacters": [
				{
					"id": "22",
					"name": "Sonrisas"
				},
				{
					"name": "Bob Bubbleboms",
					"id": "21"
				}
			],
			"relatedLocations": [
				{
					"id": "11",
					"name": "The great salar"
				},
				{
					"id": "32",
					"name": "The Old Mountain"
				},
				{
					"id": "33",
					"name": "The Red forest"
				}
			]
		},
		{
			"id": "33",
			"name": "The Red forest",
			"tag": "location",
			"description": "A beautifull but terrifying red forest",
			"relatedDates": [
				{
					"id": "1",
					"title": "Race on the great white"
				}
			],
			"relatedCharacters": [
				{
					"id": "1",
					"name": "Sonrisas"
				},
				{
					"name": "Bob Bubbleboms",
					"id": "0"
				}
			],
			"relatedLocations": [
				{
					"id": "1",
					"name": "The great salar"
				},
				{
					"id": "1",
					"name": "The Old Mountain"
				},
				{
					"id": "1",
					"name": "The Red forest"
				}
			]
		}
	]
}