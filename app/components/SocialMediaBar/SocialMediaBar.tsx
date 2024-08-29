import React, { FC } from 'react'

type ISocialMediaItem = {
	name: string;
	link: string;
	svg: any;
}

interface ISocialMediaBarProps {
	mediaArray: ISocialMediaItem[];
	className: string;
}

const SocialMediaBar: FC<ISocialMediaBarProps> = ({ className, mediaArray }) => {
	const totalItems = mediaArray.length
	const finalLenght = totalItems > 5 ? 5 : totalItems;
	return (
		<div className={className + ` flex w-full h-20 space-x-2`}>
			{mediaArray.map(item => {
				return (
					<a key={item.name} href={item.link} className={`w-[${100 / finalLenght}%]`}>
						{item.svg()}
					</a>
				)
			})}
		</div>)
}

export default SocialMediaBar;