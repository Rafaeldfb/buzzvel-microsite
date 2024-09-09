import React from 'react';
import SectionCover from '../ui/SectionCover';
import projectsCover from '@/../public/images/projects-cover.jpg';
import Portfolio from '../ui/projects/Portfolio';

export default function BuzzvelProjects() {
  return (
    <main>
      <SectionCover
        image={projectsCover}
        title="Buzzvel Projects"
        subtitle="Unlock the full potential of your digital vision with our expert tech solutions"
      />

      <Portfolio
      
      />
    </main>
  )
}
