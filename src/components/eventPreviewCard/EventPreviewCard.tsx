'use client';

import React from 'react';

import { Card } from 'primereact/card';

import { TimelineEvent } from 'common/types';

const EventPreviewCard = (cardInfo: TimelineEvent) => {
    const {
        id,
        title,
        description,
        date,
        icon,
        color,
        showButton,
        relatedCharacters,
        relatedLocations,
    } = cardInfo;

    return (
        <Card
            title={title}
            subTitle={description}
            className="
			max-w-[500px]
			m-4
			overflow-hidden
			ring-1
			rounded-xl
			shadow-xl
			cursor-pointer
			"
            footer={
                <span className="text-gray-400 justify-self-end">
                    {' '}
                    click for more details{' '}
                </span>
            }
        >
            {/* <div
				className="
				flex
				flex
				w-full
				justify-evenly
				gap-y-2
				p-2"
			>
				<div
					className="flex
					flex-col
					text-center
					no-wrap
					border-2
					border-black
					rounded-lg
					p-2
					items-center
					no-wrap"
				>
					<h2 className="font-bold">Related Characters</h2>
					<ul>
						{relatedCharacters.map((character) => {
							return (<li>{character.name}</li>)
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
							return (<li>{location.name}</li>)
						})}
					</ul>
				</div> 
			</div>
				*/}
        </Card>
    );
};

export default EventPreviewCard;
