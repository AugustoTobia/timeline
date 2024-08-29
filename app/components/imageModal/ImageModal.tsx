import Image from 'next/image';
import React, { FC, useState } from 'react'

interface ImageModalProps {
	isOpen: boolean;
	source: any;
	alt: string;
	onClick: () => void;
}

const ImageModal: FC<ImageModalProps> = ({ isOpen, source, alt, onClick }) => {
	const [ratio, setRatio] = useState(1)

	return (
		<div className={`${isOpen ? 'flex' : 'hidden'} bg-[#000d] w-full h-full absolute flex-grow cursor-pointer`} onClick={onClick}>
			<div className='fixed w-full h-full overflow-hidden '>
				<Image
					src={source}
					alt={alt}
					fill
					placeholder='blur'
					style={{
						objectFit: 'contain',
						padding: '2vh 2vw'
					}}
					priority
					onLoad={({ target }) => {
						const { naturalWidth, naturalHeight } = target as HTMLImageElement
						setRatio(naturalHeight / naturalWidth)
					}
				}
				/>
			</div>
		</div>
	)
}

export default ImageModal;