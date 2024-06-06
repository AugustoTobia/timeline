"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const SizedImage = ({ alt, source }: { alt: string, source: any }) => {
	const [ratio, setRatio] = useState(1)
	const size = ratio < 1 ? 'w-[90vw] aspect-[4/3]' : ' aspect-[3/5] h-[80vh]'

	return (
		<div className={`relative ${size}`}>
			<Image
				src={source}
				alt={alt}
				fill
				style={{
					objectFit: 'contain',
				}}
				priority
				placeholder='blur'
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