'use client';

import React, { FC, useState } from 'react';

import { BiSolidUserPlus } from 'react-icons/bi';
import { MdAddLocation } from 'react-icons/md';
import { TbTimelineEventPlus } from "react-icons/tb";

import {
	CardIndicator,
	ICharacterCard,
	ICharacterOrLocation,
	ILocationCard,
	TimelineEvent,
} from 'common/types';
import { useAppContext } from 'context';

const RelationsDropdown: FC<{
	currentEntity: TimelineEvent | ICharacterOrLocation;
	options: ILocationCard[] | ICharacterCard[] | TimelineEvent[];
}> = ({ currentEntity, options }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { addRelation } = useAppContext();

	const handleSelect = (optionId: string | undefined) => {
		const selectedOption = options.find((item) => item.id === optionId);
		if (selectedOption) addRelation(currentEntity, selectedOption);
		setIsOpen(false);
	};

	const filteredOptions = () => {
		if (options[0].tag === 'character') {
			return options.reduce((list, item) => {
				const itemFound = currentEntity.relatedCharacters.find(
					(option) => item.id === option.id,
				);
				if (!itemFound) list = [...list, item];
				return list;
			}, [] as CardIndicator[]);
		} else if (options[0].tag === 'location') {
			return options.reduce((list, item) => {
				const itemFound = currentEntity.relatedLocations.find(
					(option) => item.id === option.id,
				);
				if (!itemFound) list = [...list, item];
				return list;
			}, [] as CardIndicator[]);
		} else if (currentEntity.tag !== 'event' && options[0].tag === 'event') {
			return options.reduce((list, item) => {
				const itemFound = currentEntity.relatedEvents.find(
					(option) => item.id === option.id,
				);
				if (!itemFound) list = [...list, item];
				return list;
			}, [] as CardIndicator[]);
		} else return []
	};

	return (
		<div className="rounded-lg bg-red-200 w-full">
			<button
				name="options"
				onClick={() => {
					setIsOpen(!isOpen);
				}}
				className="relative flex p-2"
			>
				{options[0].tag === 'character' ? (
					<div className="flex items-center justify-center gap-x-2">
						<BiSolidUserPlus
							size={'100%'}
							className="align-self-end w-[1.5rem]"
							color="black"
						/>
						<span className="text-sm font-black uppercase text-white">
							Characters
						</span>
					</div>
				) : options[0].tag === 'location' ? (
					<div className="flex items-center justify-center gap-x-2">
						<MdAddLocation
							size={'100%'}
							className="align-self-end w-[1.5rem]"
							color="black"
						/>
						<span className="text-sm font-black uppercase text-white">
							Locations
						</span>
					</div>
				) : <div className="flex items-center justify-center gap-x-2">
					<TbTimelineEventPlus
						size={'100%'}
						className="align-self-end w-[1.5rem]"
						color="black"
					/>
					<span className="text-sm font-black uppercase text-white">
						Events
					</span>
				</div>}
			</button>
			<ul
				className={`${isOpen ? 'flex' : 'hidden'} absolute z-50 flex-col rounded-b-lg bg-white p-2 shadow-lg`}
			>
				{filteredOptions().length ? (
					filteredOptions().map((option) => {
						return (
							<li
								key={option.id}
								className="cursor-pointer hover:font-black"
								onClick={() => handleSelect(option.id)}
							>
								{option.name}
							</li>
						);
					})
				) : (
					<li
						key="noOptionFound"
						className="cursor-pointer italic text-gray-400"
						onClick={() => setIsOpen(false)}
					>
						The list is empty
					</li>
				)}
			</ul>
		</div>
	);
};

export default RelationsDropdown;