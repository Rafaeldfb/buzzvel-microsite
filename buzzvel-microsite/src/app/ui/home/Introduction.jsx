'use client'

import React, { useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import SectionTitle from '../SectionTitle';

import hello from '@/../public/images/about-me-hello.jpg';
import introduction from '@/../public/images/about-me-introduction.jpg';
import achievements from '@/../public/images/about-me-achievements.jpg';
import cta from '@/../public/images/about-me-cta.jpg';

const aboutMeContent = {
  hello: {
    title: "Connect with a Complete Full Stack Developer",
    content: "I’m Rafael Bonatti, a full stack developer passionate about creating innovative and scalable web solutions. With over 3 years of experience, I have worked on challenging projects from conception to implementation, always striving to deliver exceptional results.",
    imgSrc: "images/about-me-hello.jpg",
    img: hello,
  },
  introduction: {
    title: "Building the Future of the Web, One Line of Code at a Time",
    content: "My journey as a developer has led me to master various technologies such as React.js, Node.js, Python, and PHP. Over the years, I have had the opportunity to lead complex projects and contribute to the growth of startups and established companies.",
    imgSrc: "images/about-me-intro.jpg",
    img: introduction,
  },
  achievements: {
    title: "Tangible Results, Impactful Projects",
    content: "Throughout my career, I’ve had the pleasure of achieving significant results, such as increasing e-commerce sales by over 200% and leading the development of essential features on global platforms. I am driven by challenges and always aim to deliver solutions that exceed expectations.",
    imgSrc: "images/about-me-achivements.jpg",
    img: achievements,
  },
  cta: {
    title: "Let's Build the Future Together",
    content: "I'm eager to collaborate with the talented team at Buzzvel. My skills and experience make me a perfect fit for your organization. Click below to explore and learn more about how we can work together.",
    imgSrc: "images/about-me-cta.jpg",
    img: cta,
  },
}

function IntroductionTopics({topic, even}) {
  const {title, content, img} = topic;
  const imgRef = useRef();
  const isInView = useInView(imgRef, { once: true });

  const mobileEvenImage = even ? '' : '';
  const mobileEvenContent = even ? '' : '';

  return (
    <div 
      className={`topic-item mb-12 w-full h-[80svh] md:h-auto relative md:static block md:flex md:gap-12 `}
    >
      <figure className={`topic-image relative w-full h-full md:h-auto md:aspect-square md:w-5/12 overflow-hidden`}>
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

      <article className="topic-content w-10/12 md:h-fit flex flex-col absolute md:static bottom-2 left-1 p-2 md:p-6 lg:p-12 bg-dynamic-red rounded-md md:rounded-xl">
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
        title="My Introduction"
        subtitle="A intodution subtitle"
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
