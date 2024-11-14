'use client'
import { EntityCard, PreviewCard } from 'components/';
import { useAppContext } from 'context'
import React from 'react'

const page = () => {
	const { timelineState } = useAppContext();

	return (
		<ul className='flex w-full flex-wrap gap-2'>
			{timelineState.locationsList.map(location => {
				return <PreviewCard {...location} />
			})}
		</ul>
	)
}

export default page