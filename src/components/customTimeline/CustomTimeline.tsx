'use client';

import React from 'react';

import { Card } from 'primereact/card';
import { Timeline } from 'primereact/timeline';
import { TiPlus } from 'react-icons/ti';

import { TimelineEvent } from 'common/types';
import { useAppContext } from 'context';

import { CustomMarker, EventPreviewCard } from 'components';

import './customTimeline.css';

const CustomTimeline = () => {
    const {
        timelineState,
        setTimelineState,
        addEvent,
        deleteEvent,
        setButtonVisibility,
    } = useAppContext();

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
                    content={EventPreviewCard}
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
