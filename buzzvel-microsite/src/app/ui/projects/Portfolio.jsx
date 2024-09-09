import React from 'react';
import SectionTitle from '../SectionTitle';
import Carousel from './Carousel';
import { portfolio } from '@/data/portfolio';

export default function Portfolio() {
  return (
    <section className="buzzvel-portifolio container mx-auto">
      <header className="mb-24">
        <SectionTitle 
          title="Elevate your business to new heights"
          subtitle="explore our services today"
        />
      </header>

      <article className="mb-24">
        <Carousel projects={portfolio}/>
      </article>
    </section>
  )
};