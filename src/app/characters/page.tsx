'use client';

import React, { useEffect } from 'react';

import { v4 as uuid } from 'uuid';

import { ICard } from 'common/types';
import { useAppContext } from 'context';
import { useModalContext } from 'context/modalContext';

import { PreviewCard } from 'components/';

const page = () => {
	const { timelineState } = useAppContext();
	const { openModal } = useModalContext();
	useEffect(() => {}, [timelineState]);

	let baseData: ICard = {
		id: uuid(),
		name: '',
		tag: 'character',
		description: '',
		relatedCharacters: [],
		relatedLocations: [],
		relatedEvents: [],
	};

	return (
		<>
			<ul className="flex w-full gap-2">
				{timelineState.charactersList.map((character) => {
					return (
						<PreviewCard
							key={character.id}
							{...character}
						/>
					);
				})}
			</ul>
			<button
				onClick={() => openModal({ entityData: baseData, action: 'add' })}
			>
				CLICK
			</button>
		</>
	);
};

export default page;