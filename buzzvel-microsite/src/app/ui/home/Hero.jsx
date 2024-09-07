'use client'

import React, {useEffect, useState} from 'react';
import style from '../home/hero.module.css';
import useViewSize from '@/hooks/useViewSize';

const MOBILE_MIN_WIDTH = 768;

export default function Hero() {
  const {width} = useViewSize();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => { 
    const nextIsMobile = width < MOBILE_MIN_WIDTH;
    
    if (isMobile !== nextIsMobile) {
      setIsMobile(nextIsMobile)
    }
  },[width]);

  return (
    <div className={style.heroContainer}>
      <header className={style.heroDisplay}>
        <h1 className="font-raleway text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-highlight-white font-extrabold" >
          Hero header text display
        </h1>

        <h2 className="font-raleway text-xl md:text-3xl lg:text-4xl font-semibold">
          A impactful text with 2 or more lines.
          <br/>
          Add some animatio to it!
        </h2>
      </header>

      <div 
        className={style.heroVideo}
      >
        <video 
          className={style.videoElement}
          width='auto'
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          poster="images/posters/hero-image.png"
        >
          <source 
            src={`videos/buzzvel-hero${isMobile ? '-mobile' : ''}.mp4`} 
            type='video/mp4'
          />
        </video>
      </div>
    </div>
  )
};
