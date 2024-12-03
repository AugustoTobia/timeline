'use client';

import React, { FC } from 'react';

import { MdDelete } from 'react-icons/md';

import { trimText } from 'common/utils';
import { useAppContext } from 'context';
import { useModalContext } from 'context/modalContext';

import { ParagraphInput, RelationsDropdown, TitleInput } from 'components';

const EntityCard: FC = () => {
	const { removeRelation, timelineState, modifyEntity } = useAppContext();
	const { modalData, setModalData, closeModal } = useModalContext();
	const { entityData } = modalData;

	const handleCloseModal = () => {
		if (modalData.entityData) {
			modifyEntity(modalData.entityData);
		}
		closeModal(modalData);
	};
	return (
		<div className="max-w-1/2 m-auto flex flex-col items-center rounded-xl bg-white p-2 shadow ring md:flex-row">
			<div className="flex w-5/6 min-w-[200px] flex-col items-center lg:min-w-[500px]">
				<TitleInput
					initialText={entityData.name || 'Name it!'}
					semanticTag="h1"
					className="capitalized flex w-full justify-center text-lg font-black text-gray-600"
					onBlur={(newContent) => {
						if (!newContent) return;
						setModalData({
							...modalData,
							entityData: { ...entityData, name: newContent },
						});
					}}
				/>
				<ParagraphInput
					initialText={entityData.description || 'Add a description!'}
					semanticTag="p"
					height={200}
					width={500}
					allowOverflow
					onBlur={(newContent) =>
						setModalData({
							...modalData,
							entityData: { ...entityData, description: newContent },
						})
					}
					className="flex w-full justify-center text-gray-600"
				/>

				{modalData.action === 'add' ? (
					<button onClick={() => closeModal()}>Cancel</button>
				) : (
					<button
						onClick={() => closeModal({ ...modalData, action: 'delete' })}
					>
						Delete
					</button>
				)}
				<button onClick={() => handleCloseModal()}>Confirm</button>
			</div>

			<div className="space-between flex flex-wrap items-start gap-x-2 md:flex-col">
				<div
					className={`no-wrap max-h-1/2 scrollbar flex w-full flex-col items-center overflow-x-hidden overflow-y-scroll`}
				>
					<RelationsDropdown
						currentEntity={entityData}
						options={timelineState.charactersList}
					/>
					<ul className="w-full p-2">
						{entityData.relatedCharacters.map((character) => {
							return (
								<li
									className="flex justify-between text-sm hover:font-bold"
									title={character.name}
									key={character.id}
								>
									{trimText(character.name, 10)}
									<button onClick={() => removeRelation(entityData, character)}>
										<MdDelete
											size={'80%'}
											className="align-self-end w-[1.5rem]"
											color="black"
										/>
									</button>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="no-wrap max-h-1/2 scrollbar flex w-full flex-col items-center overflow-y-scroll">
					<RelationsDropdown
						currentEntity={entityData}
						options={timelineState.locationsList}
					/>
					<ul className="w-full p-2">
						{entityData.relatedLocations.map((location) => {
							return (
								<li
									className="flex justify-between text-sm hover:font-bold"
									title={location.name}
									key={location.id}
								>
									{trimText(location.name, 10)}
									<button onClick={() => removeRelation(entityData, location)}>
										<MdDelete
											size={'80%'}
											className="align-self-end w-[1.5rem]"
											color="black"
										/>
									</button>
								</li>
							);
						})}
					</ul>
				</div>
				{entityData && entityData.name !== 'event' && (
					<div className="no-wrap max-h-1/2 scrollbar flex w-full flex-col items-center overflow-y-scroll">
						<RelationsDropdown
							currentEntity={entityData}
							options={timelineState.events}
						/>
						<ul className="w-full p-2">
							{entityData.relatedEvents.map((event) => {
								return (
									<li
										className="flex justify-between text-sm hover:font-bold"
										title={event.name}
										key={event.id}
									>
										{trimText(event.name, 10)}
										<button onClick={() => removeRelation(entityData, event)}>
											<MdDelete
												size={'80%'}
												className="align-self-end w-[1.5rem]"
												color="black"
											/>
										</button>
									</li>
								);
							})}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default EntityCard;