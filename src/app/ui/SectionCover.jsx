'use client'

import React, { useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';

export default function SectionCover({
  image,
  title,
  subtitle
}) {
  const imageRef = useRef();
  const isInView = useInView(imageRef, { once: true });

  return (
    <div className="section-cover w-full h-[80svh] relative mb-[20svh]">
      <figure className="topic-image relative w-full h-full overflow-hidden">
        <Image
            className="object-cover absolute w-full h-[200%] origin-bottom"
            src={image}
            ref={imageRef}
            alt={`section ${title}`}
            loading='eager'
            placeholder='blur'
            quality='75'
            style={{
              maxWidth: 'unset',
              translate: isInView ? ' 0 0' : '0 -50%',
              opacity: isInView ? '1' : '0',
              transition: "all 2s ease-in-out 1s",
            }}
          />
      </figure>

      {/* <div className="cover-header absolute top-1/4 md:top-2/4 left-8 md:left-1/4 bg-gradient-to-b from-transparent via-dark-bg to-transparent"> */}
      <div 
        className="cover-header absolute top-1/4 md:top-2/4 left-8 md:left-1/4 text-display-bg"
        style={{
          boxShadow: '0 0 14px 22px var(--color-dark-bg-overlay)',
          backgroundColor: 'var(--color-dark-bg-overlay)',
        }}
      >
        <h1 className="text-2xl md:text-6xl text-highlight-white font-raleway font-bold">
          {title}
        </h1>

        <h3 className="text-lg md:text-2xl text-highlight-white font-raleway ">
          {subtitle}
        </h3>
      </div>
    </div>
  )
}
