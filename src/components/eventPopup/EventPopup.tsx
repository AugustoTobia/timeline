'use client';

import React, { FC } from 'react';

import { TimelineEvent } from 'common/types';

import { TextInput } from 'components';

const listTitleClass = 'font-bold p-2 uppercase bg-red-200 text-white';
const listContainerClass = 'flex flex-col no-wrap items-center no-wrap';

const EventPopup: FC<TimelineEvent> = (props) => {
    const { title, description, relatedCharacters, relatedLocations } = props;

    return (
        <div
            className="ring
			shadow
			p-2
			rounded-xl
			m-2
			flex
			flex-col
			items-center"
        >
            <TextInput
                initialText={title}
                semanticTag="h1"
                width={200}
                height={100}
                overrideOptions=" "
                className="w-full
				flex
				justify-center
				text-lg
				capitalized
				font-black
				text-gray-600"
            />
            <TextInput
                initialText={description}
                semanticTag="p"
                height={200}
                width={500}
                allowOverflow
                className="w-full
				flex
				justify-center
				text-gray-600"
            />

            <div className="flex space-between">
                <div className={`border-r-2 ${listContainerClass}`}>
                    <h2 className={listTitleClass}>Related Characters</h2>
                    <ul className="w-full p-2">
                        {relatedCharacters.map((character) => {
                            return <li key={character.id}>{character.name}</li>;
                        })}
                    </ul>
                </div>
                <div className={listContainerClass}>
                    <h2 className={listTitleClass}>Related Location</h2>
                    <ul className="w-full p-2">
                        {relatedLocations.map((location) => {
                            return <li key={location.id}>{location.name}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EventPopup;
