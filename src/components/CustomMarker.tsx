"use client"
import React, { Dispatch, useEffect, useState } from "react";
import { TimelineEvent } from "common/types";
import { TiDelete, TiPlus } from "react-icons/ti";
import './CustomMarker.css';
const CustomMarker = ({
	item,
	timelineState,
	setButtonVisibility,
	setTimelineState,
	addEvent,
	deleteEvent }: {
		item: TimelineEvent,
		timelineState: any,
		setButtonVisibility: (currentEvent: TimelineEvent, value: boolean) => void,
		setTimelineState: Dispatch<any>,
		addEvent: (currentEvent: TimelineEvent, after: boolean) => void,
		deleteEvent: (currentEvent: TimelineEvent) => void
	}) => {

	useEffect(() => {
		if (!timelineState || !setTimelineState) return;
	}, [timelineState])

	return (
		<div>
			<button
				className="
					flex
					w-[1rem]
					h-[1rem]
					mx-auto
					mb-[2px]
					border-circle
					text-white
					z-1
					bg-black
				"
				onClick={() => addEvent(item, false)}
			>
				<TiPlus size={"100%"} />
			</button>
			<button
				className="
					flex
					relative
					w-[2rem]
					h-[2rem]
					align-items-center
					justify-content-center
					text-red
					border-circle
					z-1
					shadow-1
				"
				onClick={() => setButtonVisibility(item, !item.showButton)}
				style={{
					backgroundColor: item.color
				}}>
				<i className={item.icon}></i>
			</button>
			<button
				className="
					flex
					w-[1rem]
					h-[1rem]
					mx-auto
					mt-[2px]
					text-white
					border-circle
					z-1
					bg-black
				"
				onClick={() => addEvent(item, true)}
			>
				<TiPlus size={"100%"} />
			</button>

			<button
				onClick={() => {
					() => setButtonVisibility(item, false)
					deleteEvent(item)
				}}
				className={`
					border-circle
					absolute
					top-0
					translate-x-[90%]
					z-1
					w-[2rem]
					h-[2rem]
					align-items-center
					justify-content-center
					text-red-500
					shadow-1
					transition-opacity
					transition ease-in-out
					duration-300
					${item.showButton ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}
				`}
			>
				<TiDelete size={'100%'} />
			</button>
		</div>
	);
};

export default CustomMarker;