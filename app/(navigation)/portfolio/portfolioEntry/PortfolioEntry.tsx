import React, { FC } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { IPortfolioEntry } from '@/app/common/types';

const PortfolioEntry: FC<IPortfolioEntry> = ({ classname, title, description, image, projectId }) => {
	return (
		<div
			className={`
				${classname}
				w-[100%]
				h-[200px]
				md:w-[33%]
				lg:h-[300px]
				xl:h-[450px]
				items-center
				justify-center
			`}
		>
			<Link
				href={`/portfolio/` + projectId}
				className={`
					relative
					w-full
					h-full
					flex
					flex-col
					justify-evenly
					items-center
					`
				}
			>
				<Image
					key={image[0].alt}
					src={image[0].source}
					alt={image[0].alt}
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					fill
					placeholder='blur'
					style={{
						objectFit: 'cover',
						objectPosition: '50% 30%',
					}}
				/>
				<div className='
					w-full
					relative
					flex
					flex-col
					items-center
					z-20
					mt-auto
					lg:h-full
					lg:justify-center
					lg:opacity-0
					lg:transition-opacity
					lg:ease-in
					lg:duration-200
					lg:opacity-0
					lg:hover:opacity-70
					lg:focus:bg-grey-1
					'
				>
					<div className='absolute w-full h-full bg-black opacity-60 -z-10' />
					<h1 className='uppercase text-[2rem] text-grey-base font-black'>
						{title}
					</h1>
					<p className='uppercase text-grey-base text-center'>
						{description}
					</p>
				</div>

			</Link>
		</div>
	)
}

export default PortfolioEntry