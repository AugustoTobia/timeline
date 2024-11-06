'use client';

import React from 'react';

import { ICard } from 'common/types';

const Card = (cardInfo: ICard) => {
	const { name, tag, description, relatedCharacters, relatedLocations } =
		cardInfo;

	return (
		<div className="m-4 max-w-[500px] overflow-hidden rounded-xl shadow-xl ring-1">
			<div className="flex w-full flex-col items-center gap-y-2 bg-blue-700 p-2 text-white">
				<h1 className="text-xl font-bold capitalize">{name}</h1>
				<span
					className={`rounded p-1 text-sm font-semibold uppercase text-white ${tag === `character` ? 'bg-green-400' : 'bg-red-200'}`}
				>
					{tag}
				</span>
			</div>
			<div className={`flex flex-col items-center justify-center gap-y-2 p-2`}>
				<p>{description}</p>
				<div className="flex w-full justify-evenly">
					<div
						className={`no-wrap no-wrap flex flex-col items-center text-center`}
					>
						<h2 className="font-bold">Related Characters</h2>
						<ul>
							{relatedCharacters.map((character) => {
								return <li key={character.id}>{character.name}</li>;
							})}
						</ul>
					</div>
					<div
						className={`no-wrap no-wrap flex flex-col items-center text-center`}
					>
						<h2 className="font-bold">Related Location</h2>
						<ul>
							{relatedLocations.map((location) => {
								return <li key={location.id}>{location.name}</li>;
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;