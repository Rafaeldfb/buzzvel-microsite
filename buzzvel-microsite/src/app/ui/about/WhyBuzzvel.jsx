'use client'

import React, { useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import SectionTitle from '../SectionTitle';
import { whyBuzzvelCards } from '@/data/why-buzzvel';

function WhyCards({card, order}) {
  const cardRef = useRef();
  const isInView = useInView(cardRef, { once: true });

  const isEven = order % 2 === 0;

  return (
    <div 
      ref={cardRef}
      className={`
        card-item flex flex-wrap items-center w-full gap-4 mb-10 p-6 
        border border-dynamic-red rounded-lg ${!isEven && 'flex-row-reverse '}
      `}
      style={{
        borderColor: !isInView && 'transparent',
        transition: 'all 2000ms ease-out 1000ms'
      }}
    >
      <div className="card-img relative aspect-square w-full md:w-4/12 rounded-lg overflow-hidden">
        <Image 
          className="object-cover absolute w-full h-full"
          src={card.image}
          alt={card.title}
          placeholder='blur'
          style={{...card.focalPoint}}
        />
      </div>

      <div 
        className="card-content w-full h-full flex-1 lg:px-8"
        style={{
          opacity: isInView ? '1' : '0',
          transition: 'all 1000ms ease-out 500ms'
        }}
      >
        <h2 className="content-title font-bold text-xl md:text-2xl lg:text-6xl mb-8 text-dynamic-red" > 
          {card.title}
        </h2>

        <p className="content-text md:text-xl lg:text-2xl font-roboto text-highlight-white" > 
          {card.content}
        </p>
      </div>
    </div>
  )
};


export default function WhyBuzzvel() {
  return (
    <section className="why-buzzvel container mx-auto">
      <header className="mb-24">
        <SectionTitle
          title="Why buzzvel?"
          subtitle="It's easy to understand, checkout!"
        />
      </header>

      <article className="cards-container mb-24">
        {whyBuzzvelCards.map((card, index) => (
          <WhyCards 
            key={card._id} 
            card={card} 
            order={index} 
          />
        ))}
      </article>
    </section>
  )
}
