'use client';

import React from 'react';

import { useAppContext } from 'context';
import { useModalContext } from 'context/modalContext';

import { PreviewCard } from 'components/';
import { newEmptyEntity } from 'common/utils';
import { ModalData } from 'common/types';

const page = () => {
	const { timelineState, createEntity } = useAppContext();
	const { openModal } = useModalContext();

	const handleCloseModal = (data: ModalData) => {
		createEntity(data.entityData)
	}
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
				onClick={() => openModal({
					callbackOnClose: handleCloseModal,
					entityData: newEmptyEntity('location'),
					action: 'add'
				})}
			>
				CLICK
			</button>
		</ul>
	);
};

export default page;