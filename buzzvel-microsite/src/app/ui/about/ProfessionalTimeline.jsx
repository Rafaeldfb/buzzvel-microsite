import React from 'react';
import SectionTitle from '../SectionTitle';
import Timeline from '../timeline/Timeline';
import { workExperience } from '@/data/professional-exp';

export default function ProfessionalTimeline() {
  return (
    <section className="professional-timeline container mx-auto">
      <header className="mb-24">
        <SectionTitle
          title="My professional journey"
          subtitle="Over than 3 years of experience"
        />
      </header>

      <article className="mb-24">
        <Timeline 
          data={workExperience.timeSeries}
          order={workExperience.order}
          icons={workExperience.icons}
        />
      </article>
    </section>
  )
}
