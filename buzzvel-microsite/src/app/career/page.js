import React from "react";
import SectionCover from "../ui/SectionCover";
import BuzzvelCareerTimeline from "../ui/career/BuzzvelCareerTimeline";

import careerCover from "@/../public/images/career-cover.jpg";

export default function CareerTimeline() {
  return (
    <main>
    <SectionCover
      image={careerCover}
      title="Charting the Path to Innovation"
      subtitle="A Visionary Journey Towards Shaping the Future with Buzzvel"
    />

    <BuzzvelCareerTimeline />
  </main>
  )
};
