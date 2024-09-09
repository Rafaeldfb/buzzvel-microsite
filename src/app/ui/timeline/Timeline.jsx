'use client'

import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { getFlatEventsList, getDateLabeDictionary } from './utils';

function TimelineItem({eventItem, dateLegendDict}) {
  const cardRef = useRef();
  const isInView = useInView(cardRef, { once: true });

  return (
    <div 
      ref={cardRef}
      className="timeline-wrapper flex flex-nowrap items-center justify-center origin-left overflow-hidden"
    >
      <div className="timeline-dates w-2/12 h-full ">
        <div className="year-wrap text-lg md:text-xl font-semibold text-right pr-2 md:pr-4">
          {dateLegendDict[Date.parse(eventItem.date)]}
        </div>
      </div>

      <div 
        className="timeline-event-cards-wrapper w-full flex border-l-2 border-l-brand-red"
        style={{
          transform: isInView ? 'translate(0, 0)' : 'translate(100%, 0)',
          opacity: isInView ? '1' : '0',
          transition: 'all 500ms ease-in-out 500ms'
        }}
      >
        <div className="event-card w-auto h-auto max-w-[60svw] bg-dynamic-red rounded-2xl mr-auto m-8 px-4 py-4 md:px-8 md:py-5">
          <div className="font-semibold mb-2">
            {eventItem.company}
          </div>

          <div className="font-roboto text-secondary-bg text-sm md:text-base font-medium">
            {eventItem.content}
          </div>
        </div>
      </div>
    </div>
  )
};

export default function Timeline({
  data={},
  order=[],
  icons={},
}) {
  const flatEventsList =  getFlatEventsList(data, order);

  return (
    <div className="timeline-container">
      {flatEventsList.map(eventItem => (
          <TimelineItem 
            key={eventItem._id} 
            eventItem={eventItem}
            dateLegendDict={
              getDateLabeDictionary(flatEventsList)
            }
          />
        ))
      }
    </div>
  )
};

