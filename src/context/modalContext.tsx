'use client';

import { createContext, useContext, useState } from 'react';

import toast from 'react-hot-toast';

import { ICard, IModalContextProps, ModalData } from 'common/types';
import { useAppContext } from 'context';

import { ClientOnlyPortal, ModalContainer } from '../components';

const baseData: ICard = {
	id: '',
	name: '',
	tag: 'character',
	description: '',
	relatedCharacters: [],
	relatedLocations: [],
	relatedEvents: [],
};

export const ModalContext = createContext<IModalContextProps | null>(null);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [isModalOpen, setModal] = useState<boolean>(false);
	const [modalData, setModalData] = useState<ModalData>({
		entityData: baseData,
		action: 'edit',
		callbackOnClose: () => { }
	});
	const { modifyEntity, createEntity, deleteEntity } = useAppContext();

	const openModal = (eventData: ModalData) => {
		setModalData(eventData);
		setModal(true);
	};

	const updateModalEntity = (newEntity: ICard) => setModalData({ ...modalData, entityData: newEntity })
	const updateModalAction = (newAction: "edit" | "add" | "delete") => setModalData({ ...modalData, action: newAction })

	const closeWithCallback = () => {
		modalData.callbackOnClose &&
			modalData.callbackOnClose(modalData);

		setModal(false)
	}

	const closeModal = (data?: ModalData) => {
		if (!data) {
			setModal(false);
			return;
		}

		switch (data.action) {
			case 'add':
				if (!data.entityData.name) {
					toast.error('A name is required');
					return;
				}
				createEntity(data.entityData);
				break;
			case 'edit':
				if (data.entityData) {
					modifyEntity(data.entityData);
				}
				break;
			case 'delete':
				deleteEntity(data.entityData);
				break;
		}
		setModal(false);
	};

	return (
		<ModalContext.Provider
			value={{
				openModal,
				closeModal,
				setModalData,
				isModalOpen,
				modalData,
				updateModalAction,
				updateModalEntity,
				closeWithCallback
			}}
		>
			{children}
			<ClientOnlyPortal>
				<ModalContainer data={modalData} />
			</ClientOnlyPortal>
		</ModalContext.Provider>
	);
};

export const useModalContext = () => {
	const modalContext = useContext(ModalContext);

	if (!modalContext) {
		throw new Error(
			'useModalContext has to be used within <modalContext.Provider>',
		);
	}

	return modalContext;
};