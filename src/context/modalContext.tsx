'use client';

import { createContext, useContext, useState } from 'react';

import { IModalContextProps, TimelineEvent } from 'common/types';

export const ModalContext = createContext<IModalContextProps | null>(null);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setModal] = useState<boolean>(true);
  const [modalData, setModalData] = useState<TimelineEvent | null>(null);

  const handleOpenModal = (eventData: TimelineEvent) => {
    setModalData(eventData);
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        openModal: handleOpenModal,
        closeModal: handleCloseModal,
        setModalData,
        isModalOpen,
        modalData,
      }}
    >
      {children}
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