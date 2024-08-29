"use client"
import React, { FC, useState } from 'react'
import Image from 'next/image'

interface ISizedImageProps {
	alt: string;
	source: any;
	onClick?: () => void;
}

const SizedImage: FC<ISizedImageProps> = ({ alt, source, onClick }) => {
	const [ratio, setRatio] = useState(1)
	const size = ratio < 1 ? 'w-[80vw] aspect-[4/3]' : ' aspect-[3/5] h-[60vh]'

	return (
		<div className={`relative ${size} cursor-pointer`} onClick={onClick}>
			<Image
				src={source}
				alt={alt}
				fill
				style={{
					objectFit: 'contain',
				}}
				priority
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				onLoad={({ target }) => {
					const { naturalWidth, naturalHeight } = target as HTMLImageElement
					setRatio(naturalHeight / naturalWidth)
				}
				}
			/>
		</div>
	)
}

export default SizedImage