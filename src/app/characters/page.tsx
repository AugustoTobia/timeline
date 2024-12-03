'use client';

import React, { useEffect } from 'react';

import { useAppContext } from 'context';
import { useModalContext } from 'context/modalContext';

import { newEmptyEntity } from 'common/utils';
import { PreviewCard } from 'components/';
import { ModalData } from 'common/types';

const page = () => {
	const { timelineState, createEntity } = useAppContext();
	const { openModal } = useModalContext();
	useEffect(() => { }, [timelineState]);

	const handleCloseModal = (data: ModalData) => {
		createEntity(data.entityData)
	}

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
				onClick={() => openModal({
					callbackOnClose: handleCloseModal,
					entityData: newEmptyEntity('character'),
					action: 'add'
				})}
			>
				CLICK
			</button>
		</>
	);
};

export default page;