'use client';

import React, { FC, useLayoutEffect } from 'react';

import { useAppContext } from 'context';
import { useModalContext } from 'context/modalContext';

import { EntityCard } from 'components';
import { createPortal } from 'react-dom';
import { entities } from 'common/types';

const EditPopup: FC = () => {
	const {
		isModalOpen,
		modalData,
		closeModal,
		setModalData
	} = useModalContext();

	const {
		modifyEntity,
		timelineState,
	} = useAppContext();

	useLayoutEffect(() => {
		if (modalData) {
			const updateModal = timelineState[entities[modalData.tag]].find((event) => event.id === modalData?.id);
			if (updateModal) setModalData(updateModal);
		}
	}, [timelineState]);

	if (!modalData) return;

	const handleCloseModal = () => {
		modifyEntity(modalData);
		closeModal();
	};

	return (
		isModalOpen && createPortal(
			<div
				onClick={() => handleCloseModal()}
				className={`items-cente fixed z-50 flex h-full w-full justify-center bg-black bg-opacity-40`}
			>
				<div
					onClick={(e) => e.stopPropagation()}
					className="max-w-1/2 m-auto flex flex-col items-center rounded-xl bg-white p-2 shadow ring md:flex-row"
				>
					<EntityCard {...modalData} />
				</div>
			</div>, document.getElementById('modal-container')!)
	);
};

export default EditPopup;