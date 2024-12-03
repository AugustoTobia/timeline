'use client';

import React from 'react';

import { ICard } from 'common/types';
import { useAppContext } from 'context';
import { useModalContext } from 'context/modalContext';

import { PreviewCard } from 'components/';

const page = () => {
	const { timelineState } = useAppContext();
	const { openModal } = useModalContext();

	let baseData: ICard = {
		id: '',
		name: '',
		tag: 'location',
		description: '',
		relatedCharacters: [],
		relatedLocations: [],
		relatedEvents: [],
	};
	return (
		<ul className="flex w-full flex-wrap gap-2">
			{timelineState.locationsList.map((location) => {
				return (
					<PreviewCard
						key={location.id}
						{...location}
					/>
				);
			})}
			<button
				onClick={() => openModal({ entityData: baseData, action: 'add' })}
			>
				CLICK
			</button>
		</ul>
	);
};

export default page;