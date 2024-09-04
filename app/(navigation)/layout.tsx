"use client"
import React, { FC, createContext, useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer';
import ImageModal from '../components/imageModal/ImageModal';
import { StaticImageData } from 'next/image';
import { ModalContext } from './ModalContext';


const Layout: FC<Readonly<{
	children: React.ReactNode;
}>> = ({ children }) => {
	const [imageCloseup, setImageCloseup] = useState<StaticImageData>();
	const [isModalOpen, setModal] = useState(false);

	const handleOpenModal = (imgSource: StaticImageData) => {
		setImageCloseup(imgSource)
		setModal(true)
	}

	return (
		<div className='bg-grey-base relative flex flex-col justify-between h-full w-full min-h-screen'>
			<Header />
			<main className='p-[2%] bg-grey-base mt-[5%]'>
				<ModalContext.Provider value={{ openModal: handleOpenModal, closeModal: () => setModal(false) }} >
					{children}
				</ModalContext.Provider>
			</main>
			<Footer />
			{imageCloseup &&
				<ImageModal isOpen={isModalOpen} source={imageCloseup} alt={''} onClick={() => setModal(false)} />
			}
		</div >
	)
}

export default Layout