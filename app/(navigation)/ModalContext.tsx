"use client"
import { createContext } from 'react'
import { StaticImageData } from 'next/image';

interface IModalContextProps {
	openModal: (imgSource: StaticImageData) => void;
	closeModal: () => void;
}

export const ModalContext = createContext<IModalContextProps | null>(null);