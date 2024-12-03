'use client';

import React, { FC, useLayoutEffect } from 'react';

import { ModalData, entities } from 'common/types';
import { useAppContext } from 'context';
import { useModalContext } from 'context/modalContext';

import { EntityCard, ErrorBoundary } from 'components';

const ModalContainer: FC<{ data: ModalData }> = ({ data }) => {
	const { isModalOpen, closeModal, setModalData } = useModalContext();

	const { modifyEntity, timelineState } = useAppContext();

	useLayoutEffect(() => {
		if (data.entityData?.tag) {
			const updateModal = timelineState[entities[data.entityData.tag]].find(
				(event) => event.id === data.entityData!.id,
			);
			if (updateModal)
				setModalData({ entityData: updateModal, action: 'edit' });
		} else if (data.action === 'add') {
			setModalData({ entityData: data.entityData, action: 'add' });
		}
	}, [timelineState]);

	const handleCloseModal = () => {
		if (data.entityData) {
			modifyEntity(data.entityData);
		}
		closeModal(data);
	};

	return (
		isModalOpen && (
			<div
				id="parent"
				onClick={() => handleCloseModal()}
				className={`items-cente fixed z-50 flex h-full w-full justify-center bg-black bg-opacity-40`}
			>
				<div
					onClick={(e) => e.stopPropagation()}
					className="max-w-1/2 m-auto flex flex-col items-center rounded-xl bg-white p-2 shadow ring md:flex-row"
				>
					<ErrorBoundary>
						<EntityCard />
					</ErrorBoundary>
				</div>
			</div>
		)
	);
};

export default ModalContainer;