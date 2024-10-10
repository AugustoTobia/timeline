"use client"
import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { TimelineEvent } from 'common/types';
import CustomMarker from 'components/CustomMarker';
import { useAppContext } from "context";
import './customTimeline.css';

const CustomTimeline = () => {
	const {
		timelineState,
		setTimelineState,
		addEvent,
		deleteEvent,
		setButtonVisibility
	} = useAppContext();

	const customizedContent = (item: TimelineEvent) => {
		return (
			<Card title={item.status} subTitle={item.date}>
				{item.image && <img
					src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`}
					alt={item.image}
					width={200}
					className="shadow-1"
				/>}
			</Card>
		);
	};

	return (
		<div className="card">
			<Timeline
				value={timelineState}
				align="alternate"
				className="customized-timeline"
				marker={(item: TimelineEvent) => <CustomMarker
					timelineState={timelineState}
					item={item}
					setButtonVisibility={setButtonVisibility}
					setTimelineState={setTimelineState}
					addEvent={addEvent}
					deleteEvent={deleteEvent}
				/>}
				content={customizedContent}
			/>
		</div>
	)
}

export default CustomTimeline;