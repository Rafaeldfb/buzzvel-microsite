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
              transition: "all 1s ease-in-out 0.5s",
            }}
          />
      </figure>

      <div className="cover-header absolute top-2/4 left-1/4 bg-gradient-to-b from-transparent via-dark-bg to-transparent">
        <h1 className="text-6xl text-highlight-white font-raleway font-bold">
          {title}
        </h1>

        <h3 className="text-2xl text-highlight-white font-raleway ">
          {subtitle}
        </h3>
      </div>
    </div>
  )
}
