import React, { FC } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer';

const layout: FC<Readonly<{
	children: React.ReactNode;
}>> = ({ children }) => {
	return (
		<div className='bg-grey-base flex flex-col justify-between h-full w-full min-h-screen'>
			<Header />
			<main className='p-[2%] bg-grey-base'>
				{children}
			</main>
			<Footer />
		</div>
	)
}

export default layout