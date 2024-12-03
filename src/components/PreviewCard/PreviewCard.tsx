'use client';

import React from 'react';

import { ICard, entities } from 'common/types';
import { trimText } from 'common/utils';
import { useAppContext } from 'context';
import { useModalContext } from 'context/modalContext';

const PreviewCard = (cardInfo: ICard) => {
	const { id, name, description, tag } = cardInfo;
	const { openModal } = useModalContext();
	const { timelineState } = useAppContext();

	const handleClick = (
		itemId: string,
		entityType: 'location' | 'character' | 'event',
	) => {
		const clickedEvent = timelineState[entities[entityType]].find(
			(event) => event.id === itemId,
		);
		if (clickedEvent) openModal({ entityData: clickedEvent, action: 'edit' });
		else {
			throw new Error('No event found');
		}
	};

	return (
		<div
			className="m-4 max-w-[500px] cursor-pointer overflow-hidden rounded-xl px-4 py-2 shadow-xl ring-1"
			onClick={() => {
				handleClick(id, tag);
			}}
		>
			<h1 className="text-lg font-black uppercase">{name}</h1>
			<p className="overflow-elipsis max-h-[100px] overflow-hidden">
				{description && trimText(description, 200)}
			</p>
			<span className="justify-self-end text-sm text-gray-400">
				click for more details
			</span>
		</div>
	);
};

export default PreviewCard;