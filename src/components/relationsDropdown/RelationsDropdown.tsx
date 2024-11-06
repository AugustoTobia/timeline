'use client';

import React, { FC, useState } from 'react';

import { BiSolidUserPlus } from 'react-icons/bi';
import { MdAddLocation } from 'react-icons/md';

import {
	CardIndicator,
	ICharacterCard,
	ILocationCard,
	TimelineEvent,
} from 'common/types';
import { useAppContext } from 'context';

const RelationsDropdown: FC<{
	currentEvent: TimelineEvent;
	options: ILocationCard[] | ICharacterCard[];
}> = ({ currentEvent, options }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { addCharacterOrLocation } = useAppContext();

	const handleSelect = (optionId: string | undefined) => {
		const selectedOption = options.find((item) => item.id === optionId);
		selectedOption && addCharacterOrLocation(currentEvent, selectedOption);
		setIsOpen(false);
	};
	const isCharacter = options[0].tag === 'character';

	const filteredOptions = () => {
		if (isCharacter) {
			return options.reduce((accumulator, item) => {
				const itemFound = currentEvent.relatedCharacters.find(
					(option) => item.id === option.id,
				);
				!itemFound && accumulator.push(item);
				return accumulator;
			}, [] as CardIndicator[]);
		} else {
			return options.reduce((accumulator, item) => {
				const itemFound = currentEvent.relatedLocations.find(
					(option) => item.id === option.id,
				);
				!itemFound && accumulator.push(item);
				return accumulator;
			}, [] as CardIndicator[]);
		}
	};

	return (
		<div className="rounded-lg bg-red-200">
			<button
				name="options"
				onClick={() => {
					setIsOpen(!isOpen);
				}}
				className="relative flex p-2"
			>
				{isCharacter ? (
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
				) : (
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
				)}
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
						It's empty
					</li>
				)}
			</ul>
		</div>
	);
};

export default RelationsDropdown;