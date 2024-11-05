'use client';

import React, { FC } from 'react';

import { BiSolidUserCircle } from 'react-icons/bi';
import { TiLocation } from 'react-icons/ti';

import { useAppContext } from 'context';
import { useModalContext } from 'context/modalContext';

import { ParagraphInput, TitleInput } from 'components';

const listContainerClass = 'flex flex-col no-wrap items-center no-wrap';

const EventPopup: FC = () => {
  const { isModalOpen, modalData, closeModal } = useModalContext();
  const { modifyEvent } = useAppContext();

  const handleCloseModal = () => {
    modalData && modifyEvent(modalData);
    closeModal();
  };

  return (
    isModalOpen &&
    modalData && (
      <div
        onClick={() => handleCloseModal()}
        className={`items-cente fixed z-50 flex h-full w-full justify-center bg-black bg-opacity-40`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="max-w-1/2 m-auto flex flex-col items-center rounded-xl bg-white p-2 shadow ring md:flex-row"
        >
          <div className="flex w-5/6 min-w-[200px] flex-col items-center lg:min-w-[500px]">
            <TitleInput
              initialText={modalData.title}
              semanticTag="h1"
              className="capitalized flex w-full justify-center text-lg font-black text-gray-600"
            />
            <ParagraphInput
              initialText={modalData.description}
              semanticTag="p"
              height={200}
              width={500}
              allowOverflow
              className="flex w-full justify-center text-gray-600"
            />
          </div>

          <div className="space-between flex items-start gap-x-2 md:flex-col">
            <div className={`${listContainerClass}`}>
              <div className="flex items-end gap-x-2 rounded-lg bg-red-200 p-2">
                <BiSolidUserCircle
                  size={'100%'}
                  className="align-self-end w-[1.5rem]"
                  color="white"
                />
                <h2 className="text-sm font-black uppercase text-white">
                  Characters
                </h2>
              </div>
              <ul className="w-full p-2">
                {modalData.relatedCharacters.map((character) => {
                  return (
                    <li
                      className="text-sm hover:font-bold"
                      key={character.id}
                    >
                      {character.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={listContainerClass}>
              <div className="flex items-end gap-x-2 rounded-lg bg-red-200 p-2">
                <TiLocation
                  size={'100%'}
                  className="align-self-end w-[1.5rem]"
                  color="white"
                />
                <h2 className="text-sm font-black uppercase text-white">
                  Locations
                </h2>
              </div>
              <ul className="w-full p-2">
                {modalData.relatedLocations.map((location) => {
                  return (
                    <li
                      className="text-sm hover:font-bold"
                      key={location.id}
                    >
                      {location.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default EventPopup;