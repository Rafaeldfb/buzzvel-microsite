import React from "react";
import ProfessionalTimeline from "../ui/about/ProfessionalTimeline";
import WhyBuzzvel from "../ui/about/WhyBuzzvel";
import SectionCover from "../ui/SectionCover";

import aboutCover from "@/../public/images/about-cover.jpg";
export default function About() {
  return (
    <main>
      <SectionCover
        image={aboutCover}
        title="Navigating Challenges, Embracing New Horizons"
        subtitle="From Overcoming Obstacles to Seizing New Opportunities: My Journey and Aspirations with Buzzvel"
      />

      <ProfessionalTimeline />

      <WhyBuzzvel />
    </main>
  )
}