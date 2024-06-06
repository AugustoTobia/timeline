"use client";
import React, { FC } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import Divider from '../divider/divider'

const Header: FC = () => {
	const currentPath = usePathname()
	const linkList = [
		{
			href: '/',
			text: 'home'
		},
		{
			href: '/about',
			text: 'About the Artist'
		},
		{
			href: '/portfolio',
			text: 'portfolio'
		}
	]

	return (
		<div>
			<div className='flex items-center justify-center space-x-4 '>
				{linkList.map(link => {
					const isActive = currentPath.startsWith(link.href) && link.href !== '/'
					return <Link
						key={link.href}
						className={
							`${isActive && 'font-black'}
							uppercase
							text-grey-1
							hover:font-black`
						}
						href={link.href}
					>
						{link.text}
					</Link>
				})}
			</div>
			<Divider />
		</div>
	)
}

export default Header
