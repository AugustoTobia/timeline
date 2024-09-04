import { StaticImageData } from "next/image";

export interface IProjectParams {
	params: {
		projectId: string
	}
};

export interface EntryImage {
	source: StaticImageData;
	alt: string;
};

export interface PortafolioEntryList {
	title: string;
	description: string;
	image: EntryImage[];
	projectId: string;
}

export interface IPortfolioEntry extends PortafolioEntryList {
	classname?: string;
};