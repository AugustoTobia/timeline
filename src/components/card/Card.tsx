'use client';

import React from 'react';

import { ICard } from 'common/types';

const Card = (cardInfo: ICard) => {
    const {
        id,
        name,
        tag,
        description,
        relatedDates,
        relatedCharacters,
        relatedLocations,
    } = cardInfo;

    return (
        <div
            className="
			max-w-[500px]
			m-4
			overflow-hidden
			ring-1
			rounded-xl
			shadow-xl
			"
        >
            <div
                className="flex
				flex-col
				gap-y-2
				text-white
				bg-blue-700
				w-full
				items-center
				p-2"
            >
                <h1 className="capitalize text-xl font-bold">{name}</h1>
                <span
                    className={`
					rounded
					text-white
					uppercase
					font-semibold
					p-1
					text-sm
					${tag === `character` ? 'bg-green-400' : 'bg-red-200'}`}
                >
                    {tag}
                </span>
            </div>
            <div
                className="
				flex
				flex-col
				items-center
				justify-center
				gap-y-2
				p-2"
            >
                <p>{description}</p>
                <div className="flex w-full justify-evenly">
                    <div
                        className="flex
					flex-col
					text-center
					no-wrap
					items-center
					no-wrap"
                    >
                        <h2 className="font-bold">Related Characters</h2>
                        <ul>
                            {relatedCharacters.map((character) => {
                                return (
                                    <li key={character.id}>{character.name}</li>
                                );
                            })}
                        </ul>
                    </div>
                    <div
                        className="flex
						flex-col
						text-center
						no-wrap
						items-center
						no-wrap"
                    >
                        <h2 className="font-bold">Related Location</h2>
                        <ul>
                            {relatedLocations.map((location) => {
                                return (
                                    <li key={location.id}>{location.name}</li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
