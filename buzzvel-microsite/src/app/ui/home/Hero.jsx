import React from 'react';
import style from '../home/hero.module.css';

export default function Hero() {
  const isMobile = true;

  return (
    <div className={style.heroContainer}>
      <div className={style.heroDisplay}>
        <h1 className="font-raleway text-2xl md:text-4xl lg:text-6xl text-highlight-white font-extrabold" >
          Hero header text display
        </h1>

        <h2 className="font-raleway text-xl md:text-2xl lg:text-4xl font-semibold">
          A impactful text with 2 or more lines.
          <br/>
          Add some animatio to it!
        </h2>
      </div>

      <div 
        className={style.heroVideo}
      >
        <video 
          className={style.videoElement}
          width='auto'
          // height='auto'
          autoPlay={true}
          loop={true}
          muted={true}
          preload='true'
          playsInline={true}
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
