"use client"
import React, { FC, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { IProjectParams } from '@/app/common/types'
import { entries } from '../entries'
import SizedImage from '../../../components/SizedImage/SizedImage'
import { ModalContext } from '../../ModalContext'

const ProjectComponent: FC<IProjectParams> = ({ params }) => {
	const router = useRouter();

	const currentEntry = entries.find(entry => entry.projectId === params.projectId)
	if (!currentEntry) {
		router.push('/portfolio');
	}

	const modal = useContext(ModalContext);

	return (
		<div className='flex justify-center flex-col items-center w-full min-h-[90vh]'>
			<h1 className='text-center uppercase w-full font-black text-grey-1 text-[2rem]'>
				{`${currentEntry?.title}`}
			</h1>
			<div className='h-full flex justify-center gap-2 flex-wrap w-full'>
				{currentEntry && currentEntry.image.map(img => {
					return <SizedImage
						key={img.alt}
						source={img.source}
						alt={img.alt}
						onClick={() => modal?.openModal(img.source)}
					/>
				}
				)}
			</div>
			<p className='text-center text-grey-1 w-1/2 py-4'>
				{currentEntry?.description}
			</p>
		</div >
	)
}

export default ProjectComponent