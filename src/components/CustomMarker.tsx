"use client"
import React from "react";
import { TimelineEvent } from "common/types";
import { useAppContext } from "context";

const CustomMarker = (item: TimelineEvent) => {
	const { timelineState, setTimelineState } = useAppContext();
	if (!timelineState || !setTimelineState) return;

	const addEvent = (currentEvent: TimelineEvent, after: boolean) => {
		let clickedEventIndex = timelineState.indexOf(currentEvent);
		let afterIndex = clickedEventIndex + 1
		if (after) {
			const newList = [
				...timelineState.slice(0, afterIndex),
				{ id: 5, status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' },
				...timelineState.slice(afterIndex)
			];
			setTimelineState(newList);
		} else {
			const newList = [
				...timelineState.slice(0, clickedEventIndex),
				{ id: 5, status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' },
				...timelineState.slice(clickedEventIndex)
			];
			setTimelineState(newList);
		}
	}

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
					z-1
					bg-black
				"
				onClick={() => addEvent(item, false)}
			/>
			<span
				className="
					flex
					w-2rem
					h-2rem
					align-items-center
					justify-content-center
					text-red
					border-circle
					z-1
					shadow-1
				"
				style={{
					backgroundColor: item.color
				}}>
				<i className={item.icon}></i>
			</span>
			<button
				className="
					flex
					w-[1rem]
					h-[1rem]
					mx-auto
					mt-[2px]
					border-circle
					z-1
					bg-black
				"
				onClick={() => addEvent(item, true)}
			/>
		</div>
	);
};

export default CustomMarker;