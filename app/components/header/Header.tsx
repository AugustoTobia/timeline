"use client";
import React, { FC } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import Divider from '../divider/divider'
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

const Header: FC = () => {
	const currentPath = usePathname()
	const {t, i18n} = useTranslation();

	const linkList = [
		{
			href: '/',
			text: t('header.home')
		},
		{
			href: '/about',
			text: t('header.about')
		},
		{
			href: '/portfolio',
			text: t('header.portfolio')
		}
	]

	const onLangChange = (lang: string) => {
		changeLanguage(lang, (err, t) => {
			if (err) return console.log('something went wrong loading', err);
			t('key'); // -> same as i18next.t
		})
	}

	return (
		<div className='fixed w-full bg-grey-base z-[30]'>
			<div className='flex'>
				<div className='flex items-center justify-center space-x-4 mx-auto'>
					{linkList.map((link, i) => {
						const isActive = currentPath.startsWith(link.href) && link.href !== '/'
						return <Link
							key={link.href}
							className={
								`${isActive && 'font-black'}
								uppercase
								text-sm lg:text-lg
								text-grey-1
								hover:font-black
								`
							}
							href={link.href}
						>
							{link.text}
						</Link>
					})}
				</div>
				<div className='mr-[5%]'>
					<button
						className={`
							uppercase
							text-sm
							text-grey-1
							hover:font-black
							${i18n.resolvedLanguage === 'es' && 'font-black'}
						`}
						value={'es'}
						onClick={(e) => onLangChange(e.currentTarget.value)}>
						es
					</button>
					|
					<button
						className={`
							uppercase
							text-sm
							text-grey-1
							hover:font-black
							${i18n.resolvedLanguage === 'en' && 'font-black'}
						`}
						value={'en'}
						onClick={(e) => onLangChange(e.currentTarget.value)}>
						en
					</button>
				</div>
			</div>
			<Divider />
		</div>
	)
}

export default Header
