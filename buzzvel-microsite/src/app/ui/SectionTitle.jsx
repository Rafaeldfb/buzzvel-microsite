'use client'

import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function SectionTitle({title, subtitle}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div 
      ref={ref} 
      className="section-header mt-12 mb-8 border-4 border-dark-bg p-12"
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        borderColor: isInView ? 'var(--color-highlight-white)' : 'var(--color-dark-bg-overlay)',
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <h2 className="mb-4 text-highlight-white text-4xl md:text-6xl lg:text-8xl">
        {title}
      </h2>
  
      <p className="text-light-text text-xl md:text-xl lg:text-2xl">
        {subtitle}
      </p>
    </div>
  )
}
