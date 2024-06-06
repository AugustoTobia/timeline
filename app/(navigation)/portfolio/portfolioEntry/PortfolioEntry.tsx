import React, { FC } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { IPortfolioEntry } from '@/app/common/types';

const PortfolioEntry: FC<IPortfolioEntry> = ({ classname, title, description, image, projectId }) => {
	return (
		<div className={`${classname} w-[33%] h-[200px] lg:h-[300px] xl:h-[450px] items-center justify-center relative`}>
			<Image
				key={image[0].alt}
				src={image[0].source}
				alt={image[0].alt}
				fill
				placeholder='blur'
				style={{
					objectFit: 'cover',
					objectPosition: '50% 30%',
				}}
			/>
			<Link
				href={`/portfolio/` + projectId}
				className={`
					absolute
					w-full
					h-full
					flex
					flex-col
					justify-evenly
					items-center
					bg-black
					transition-opacity
					ease-in
					duration-200
					opacity-0
					hover:opacity-70
					focus:bg-grey-1
					`
				}
			>
				<h1 className='uppercase text-[2rem] text-grey-base font-black'>
					{title}
				</h1>
				<p className='uppercase text-grey-base text-center'>
					{description}
				</p>
			</Link>
		</div>
	)
}

export default PortfolioEntry