'use client'

import React, { useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import SectionTitle from '../SectionTitle';

import { aboutMeContent } from '@/data/about-me.js';

function IntroductionTopics({topic, even}) {
  const {title, content, img} = topic;
  const imgRef = useRef();
  const isInView = useInView(imgRef, { once: true });

  return (
    <div 
      className="topic-item mb-12 w-full h-[80svh] md:h-auto relative md:static block md:flex md:gap-12"
    >
      <figure className="topic-image relative w-full h-full md:h-auto md:aspect-square md:w-5/12 overflow-hidden">
        <Image
          className="object-cover absolute w-[115%] h-[115%] origin-top-left"
          src={img}
          ref={imgRef}
          alt={`image for ${title}`}
          loading='lazy'
          placeholder='blur'
          quality='100'
          style={{
            maxWidth: 'unset',
            translate: isInView ? '-20% -20%' : '30% 30%',
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        />
      </figure>

      <article 
        className="topic-content w-10/12 md:h-fit flex flex-col absolute md:static bottom-2 left-1 p-2 md:p-6 lg:p-12 bg-dynamic-red rounded-md md:rounded-xl"
      >
        <h3 className="text-xl md:text-2xl lg:4xl font-semibold mb-6">
          {title}
        </h3>

        <p className="font-roboto text-base md:text-xl lg:2xl">
          {content}
        </p>
      </article>
    </div>
  )
};

export default function Introduction() {
  return (
    <section className="introduction-container container mx-auto">
      <SectionTitle 
        title="About me"
        subtitle="and my career as web developer"
      />

      <div className="introduction-content">
        {Object.keys(aboutMeContent).map((topic, index) => (
          <IntroductionTopics  
            key={topic}
            topic={aboutMeContent[topic]}
            even={index % 2 === 0}
          /> 
        ))}
      </div>
    </section>
  )
}
