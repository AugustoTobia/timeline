'use client';

import React, { useEffect, useLayoutEffect } from 'react';

import { TiDelete, TiPlus } from 'react-icons/ti';

import { ICustomMarker } from 'common/types';

import './CustomMarker.css';

const CustomMarker = ({
	item,
	timelineState,
	setButtonVisibility,
	addEvent,
	deleteEvent,
}: ICustomMarker) => {
	if (!timelineState) return;

	const currentEventIndex = timelineState.indexOf(item);

	return (
		<div>
			<button
				className="border-circle z-1 mx-auto mb-[2px] flex h-[1rem] w-[1rem] bg-black text-white"
				onClick={() => addEvent(currentEventIndex, false)}
			>
				<TiPlus size={'100%'} />
			</button>
			<button
				className="align-items-center justify-content-center text-red border-circle z-1 shadow-1 relative flex h-[2rem] w-[2rem]"
				onClick={() => setButtonVisibility(item, !item.showButton)}
				style={{
					backgroundColor: item.color,
				}}
			>
				<i className={item.icon}></i>
			</button>
			<button
				className="border-circle z-1 mx-auto mt-[2px] flex h-[1rem] w-[1rem] bg-black text-white"
				onClick={() => addEvent(currentEventIndex, true)}
			>
				<TiPlus size={'100%'} />
			</button>

			<button
				onClick={() => {
					setButtonVisibility(item, false);
					deleteEvent(item);
				}}
				className={`border-circle z-1 align-items-center justify-content-center shadow-1 absolute top-0 h-[2rem] w-[2rem] translate-x-[90%] text-red-500 transition transition-opacity duration-300 ease-in-out ${item.showButton ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} `}
			>
				<TiDelete size={'100%'} />
			</button>
		</div>
	);
};

export default CustomMarker;