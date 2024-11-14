'use client'
import { EntityCard, PreviewCard } from 'components/';
import { useAppContext } from 'context'
import React from 'react'

const page = () => {
	const { timelineState } = useAppContext();

	return (
		<ul className='flex w-full gap-2'>
			{timelineState.charactersList.map(character => {
				return <PreviewCard {...character} />
			})}
		</ul>
	)
}

export default page