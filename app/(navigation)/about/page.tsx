import Image from 'next/image';
import React from 'react'
import ProfilePicture from '../../common/images/profile-pic.jpg'
import IgBlack from '../../common/svg/InstagramBlack'
import SocialMediaBar from '@/app/components/SocialMediaBar/SocialMediaBar';
import ArtStation from '../../common/svg/artStation';

const mediaArray = [
	{
		name: 'Instagram',
		link: 'https://www.instagram.com/tobia_ilustra/',
		svg: IgBlack,
	},
	{
		name: 'ArtStation',
		link: 'https://www.artstation.com/tobia-ilustra',
		svg: ArtStation,
	},
	{
		name: 'aa',
		link: '',
		svg: IgBlack,
	},
	{
		name: 'aa',
		link: '',
		svg: IgBlack,
	}
]

const TheArtist = () => {

	const contactTitle = 'uppercase font-black text-grey-1 text-center'
	return (
		<div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
			<h1 className='text-grey-1 text-3xl uppercase font-black order-1 lg:hidden'>
				Augusto Tobia
			</h1>
			<div className='flex flex-col items-center text-justify border-4 border-black w-full lg:w-[45%] h-full py-10 px-20'>
				<h1 className='text-grey-1 hidden text-3xl uppercase font-black lg:block'>
					Augusto Tobia
				</h1>
				<p className='overflow-hidden'>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
				</p>
			</div>
			<div className='w-full lg:w-[45%] flex flex-col px-5 items-center justify-center'>
				<div className='border-4 w-full lg:w-2/3 border-grey-1 aspect-square rounded-full overflow-hidden '>
					<Image
						key={'some'}
						src={ProfilePicture}
						alt={'profile picture'}
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						placeholder='blur'
					/>
				</div>
				<div className='w-full flex flex-col my-2 items-center'>
					<div className='w-1/2 flex flex-col justify-center items-center'>
						<h2 className={contactTitle}>email</h2><p>augustotobia@gmail.com </p>
						<h2 className={contactTitle}>phone</h2><p>+54 9 341 743 4926</p>
					</div>
					<div>
						<h2 className={contactTitle}>Me in social media</h2>
						<SocialMediaBar className='h-10 my-2' mediaArray={mediaArray} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default TheArtist;