'use client';
import React from 'react';

import { Card } from 'primereact/card';
import { TiPlus } from 'react-icons/ti';
import { Timeline } from 'primereact/timeline';

import { useAppContext } from 'context';
import { TimelineEvent } from 'common/types';

import { CustomMarker } from 'components';

import './customTimeline.css';
import Image from 'next/image';

const CustomTimeline = () => {
    const {
        timelineState,
        setTimelineState,
        addEvent,
        deleteEvent,
        setButtonVisibility,
    } = useAppContext();

    const customizedContent = (item: TimelineEvent) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                {item.image && (
                    <img
                        src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`}
                        alt={item.image}
                        width={200}
                        className="shadow-1"
                    />
                )}
            </Card>
        );
    };

    return (
        <div className="card">
            {timelineState.length ? (
                <Timeline
                    value={timelineState}
                    align="alternate"
                    className="customized-timeline"
                    marker={(item: TimelineEvent) => (
                        <CustomMarker
                            timelineState={timelineState}
                            item={item}
                            setButtonVisibility={setButtonVisibility}
                            setTimelineState={setTimelineState}
                            addEvent={addEvent}
                            deleteEvent={deleteEvent}
                        />
                    )}
                    content={customizedContent}
                />
            ) : (
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
                    onClick={() => addEvent(0, true)}
                >
                    <TiPlus size={'100%'} />
                </button>
            )}
        </div>
    );
};

export default CustomTimeline;
