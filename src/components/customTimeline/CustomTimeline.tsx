'use client';

import React from 'react';

import { Timeline } from 'primereact/timeline';
import { TiPlus } from 'react-icons/ti';

import { TimelineEvent } from 'common/types';
import { useAppContext } from 'context';

import { CustomMarker, EventPreviewCard } from 'components';

import './customTimeline.css';

const CustomTimeline = () => {
	const { timelineState, addEvent, deleteEvent, setButtonVisibility } =
		useAppContext();

	return (
		<div className="card flex items-center">
			{timelineState.events.length ? (
				<Timeline
					value={timelineState.events}
					align="alternate"
					className="customized-timeline"
					marker={(item: TimelineEvent) => (
						<CustomMarker
							timelineState={timelineState.events}
							item={item}
							setButtonVisibility={setButtonVisibility}
							addEvent={addEvent}
							deleteEvent={deleteEvent}
						/>
					)}
					content={(item) => {
						return <EventPreviewCard {...item} />;
					}}
				/>
			) : (
				<button
					className="border-circle z-1 mx-auto mb-[2px] flex h-[1rem] w-[1rem] bg-black text-white"
					onClick={() => addEvent(0, true)}
				>
					<TiPlus size={'100%'} />
				</button>
			)}
		</div>
	);
};

export default CustomTimeline;