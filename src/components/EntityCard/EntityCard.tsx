'use client'
import { ParagraphInput, TitleInput, RelationsDropdown } from 'components';
import { ICharacterOrLocation, TimelineEvent } from 'common/types';
import { trimText } from 'common/utils';
import React, { FC } from 'react'

import { useAppContext } from 'context';
import { MdDelete } from "react-icons/md";

const EntityCard: FC<TimelineEvent | ICharacterOrLocation> = (entityData) => {
	const { removeRelation, timelineState, modifyEntity } = useAppContext()

	return (
		<div
			className="max-w-1/2 m-auto flex flex-col items-center rounded-xl bg-white p-2 shadow ring md:flex-row"
		>
			<div className="flex w-5/6 min-w-[200px] flex-col items-center lg:min-w-[500px]">
				<TitleInput
					initialText={entityData.name}
					semanticTag="h1"
					className="capitalized flex w-full justify-center text-lg font-black text-gray-600"
					onBlur={(newContent) =>
						modifyEntity({ ...entityData, name: newContent })
					}
				/>
				<ParagraphInput
					initialText={entityData.description}
					semanticTag="p"
					height={200}
					width={500}
					allowOverflow
					onBlur={(newContent) =>
						modifyEntity({ ...entityData, description: newContent })
					}
					className="flex w-full justify-center text-gray-600"
				/>
			</div>

			<div className="space-between flex flex-wrap items-start gap-x-2 md:flex-col">
				<div className={`flex flex-col no-wrap items-center w-full max-h-1/2 overflow-x-hidden overflow-y-scroll scrollbar`}>
					<RelationsDropdown
						currentEntity={entityData}
						options={timelineState.charactersList}
					/>
					<ul className="w-full p-2">
						{entityData.relatedCharacters.map((character) => {
							return (
								<li
									className="text-sm flex justify-between hover:font-bold"
									title={character.name}
									key={character.id}
								>
									{trimText(character.name, 10)}
									<button onClick={() =>
										removeRelation(
											entityData,
											character,
										)
									}>
										<MdDelete
											size={'80%'}
											className="align-self-end w-[1.5rem]"
											color="black" />
									</button>
								</li>
							);
						})}
					</ul>
				</div>
				<div className='flex flex-col no-wrap items-center w-full max-h-1/2 overflow-y-scroll scrollbar'>
					<RelationsDropdown
						currentEntity={entityData}
						options={timelineState.locationsList}
					/>
					<ul className="w-full p-2">
						{entityData.relatedLocations.map((location) => {
							return (
								<li
									className="text-sm flex justify-between hover:font-bold"
									title={location.name}
									key={location.id}
								>
									{trimText(location.name, 10)}
									<button onClick={() =>
										removeRelation(
											entityData,
											location,
										)
									}>
										<MdDelete
											size={'80%'}
											className="align-self-end w-[1.5rem]"
											color="black" />
									</button>
								</li>
							);
						})}
					</ul>
				</div>
				{entityData.tag !== 'event' &&
					<div className='flex flex-col no-wrap items-center w-full max-h-1/2 overflow-y-scroll scrollbar'>
						<RelationsDropdown
							currentEntity={entityData}
							options={timelineState.events}
						/>
						<ul className="w-full p-2">
							{entityData.relatedEvents.map((event) => {
								return (
									<li
										className="text-sm flex justify-between hover:font-bold"
										title={event.name}
										key={event.id}
									>
										{trimText(event.name, 10)}
										<button onClick={() =>
											removeRelation(
												entityData,
												event,
											)
										}>
											<MdDelete
												size={'80%'}
												className="align-self-end w-[1.5rem]"
												color="black" />
										</button>
									</li>
								);
							})}
						</ul>
					</div>}
			</div>
		</div>
	)
}

export default EntityCard;