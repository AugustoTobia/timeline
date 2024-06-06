"use client"
import React, { FC } from 'react'
import { useRouter } from 'next/navigation'
import { IProjectParams } from '@/app/common/types'
import { entries } from '../entries'
import SizedImage from '../SizedImage/SizedImage'

const ProjectComponent: FC<IProjectParams> = ({ params }) => {
	const router = useRouter();

	const currentEntry = entries.find(entry => entry.projectId === params.projectId)
	if (!currentEntry) {
		router.push('/portfolio');
	}

	return (
		<div className='flex justify-center flex-col items-center w-full min-h-[90vh]'>
			<h1 className='text-center uppercase w-full font-black text-grey-1 text-[2rem]'>
				{`${currentEntry?.title}`}
			</h1>
			<div className='h-full flex justify-evenly gap-2 flex-wrap w-full'>
				{currentEntry && currentEntry.image.map(img => {
					return <SizedImage
						key={img.alt}
						source={img.source}
						alt={img.alt}
					/>
				}
				)}
			</div>
			<p className='text-center text-grey-1 w-1/2 pt-2'>
				{currentEntry?.description}
			</p>
		</div >
	)
}

export default ProjectComponent