'use client';

import React, { FC, useEffect } from 'react';

import { useAppContext } from 'context';
import { useModalContext } from 'context/modalContext';

import { ParagraphInput, RelationsDropdown, TitleInput } from 'components';

const listContainerClass = 'flex flex-col no-wrap items-center no-wrap';

const EventPopup: FC = () => {
	const { isModalOpen, modalData, closeModal, setModalData } =
		useModalContext();
	const { modifyEvent, timelineState, removeCharacterOrLocation } =
		useAppContext();

	useEffect(() => {
		const updateModal =
			modalData &&
			timelineState.events.find((event) => event.id === modalData.id);
		if (updateModal) setModalData(updateModal);
	}, [timelineState, modalData, setModalData]);

	if (!modalData) return;

	const handleCloseModal = () => {
		modifyEvent(modalData);
		closeModal();
	};

	return (
		isModalOpen && (
			<div
				onClick={() => handleCloseModal()}
				className={`items-cente fixed z-50 flex h-full w-full justify-center bg-black bg-opacity-40`}
			>
				<div
					onClick={(e) => e.stopPropagation()}
					className="max-w-1/2 m-auto flex flex-col items-center rounded-xl bg-white p-2 shadow ring md:flex-row"
				>
					<div className="flex w-5/6 min-w-[200px] flex-col items-center lg:min-w-[500px]">
						<TitleInput
							initialText={modalData.title}
							semanticTag="h1"
							className="capitalized flex w-full justify-center text-lg font-black text-gray-600"
						/>
						<ParagraphInput
							initialText={modalData.description}
							semanticTag="p"
							height={200}
							width={500}
							allowOverflow
							className="flex w-full justify-center text-gray-600"
						/>
					</div>

					<div className="space-between flex items-start gap-x-2 md:flex-col">
						<div className={`${listContainerClass}`}>
							<RelationsDropdown
								currentEvent={modalData}
								options={timelineState.charactersList}
							/>
							<ul className="w-full p-2">
								{modalData.relatedCharacters.map((character) => {
									return (
										<li
											className="text-sm hover:font-bold"
											key={character.id}
											onClick={() => {
												removeCharacterOrLocation(
													modalData,
													character,
													'character',
												);
											}}
										>
											{character.name}
										</li>
									);
								})}
							</ul>
						</div>
						<div className={listContainerClass}>
							<RelationsDropdown
								currentEvent={modalData}
								options={timelineState.locationsList}
							/>
							<ul className="w-full p-2">
								{modalData.relatedLocations.map((location) => {
									return (
										<li
											className="text-sm hover:font-bold"
											key={location.id}
											onClick={() =>
												removeCharacterOrLocation(
													modalData,
													location,
													'location',
												)
											}
										>
											{location.name}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	);
};

export default EventPopup;