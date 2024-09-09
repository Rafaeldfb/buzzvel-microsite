'use client'

import React, { useState, useRef } from 'react';
import { FramerCarousel } from './FramerCarousel';
import { portfolio } from '@/data/portfolio';
import { arrowRightCircle } from '@/app/ui/icons/icons.js';
import Link from 'next/link';


export default function Carousel({projects}) {
  const [activeProject, setActiveProject] = useState(portfolio[0]);

  const projectHandler = (projectIndex) => {
    setActiveProject(portfolio[projectIndex])
  };

  return (
    <div className="carousel-wrapper mb-8">
      <div className="carousel-container max-w-full md:max-w-[80vw] lg:max-w-[60vw] aspect-video mx-auto flex justify-center items-center relative overflow-clip rounded-xl">
        <FramerCarousel 
          portfolio={portfolio}
          projectHandler={projectHandler}
        />
      </div>
      
      {activeProject && (
        <div className="carousel-about mmax-w-full md:max-w-[80vw] lg:max-w-[60vw] mx-auto my-10">
          <div className="about-name text-4xl md:text-6xl font-semibold flex items-center content-between">
            {activeProject.name}

            <a className="m-auto" href={activeProject.link} target='_blanck'>
              {arrowRightCircle()}
            </a>
          </div>

          <div className="about-type text-lg md:text-xl text-dynamic-red mb-2">
            {activeProject.type}
          </div>

          <div className="about-description font-roboto text-lg md:text-xl font-medium max-w-prose">
            {activeProject.description}
          </div>

        </div>
      )}
    </div>
  )
}
