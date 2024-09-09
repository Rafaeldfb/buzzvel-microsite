import React from 'react'
import SectionTitle from '../SectionTitle';
import Timeline from '../timeline/Timeline';
import { careerTimeline } from '@/data/career-buzzvel';

export default function BuzzvelCareerTimeline() {
  return (
    <section className="professional-timeline container mx-auto">
      <header className="mb-24">
        <SectionTitle
          title="My Future at Buzzvel"
          subtitle="Strategic Milestones and Ambitions for a Successful Career"
        />
      </header>

      <article className="mb-24">
        <Timeline 
          data={careerTimeline.timeSeries}
          order={careerTimeline.order}
          icons={careerTimeline.icons}
        />
      </article>
    </section>
  )
};