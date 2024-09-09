import { createId } from '@/helpers/utilities'
import whyCard_1 from '@/../public/images/why-card-1.jpg';
import whyCard_2 from '@/../public/images/why-card-2.jpg';
import whyCard_3 from '@/../public/images/why-card-3.jpg';
import whyCard_4 from '@/../public/images/why-card-4.jpg';

export const whyBuzzvelCards = [
  {
    _id: createId(),
    title: "Driving Innovation at Buzzvel",
    content: "I'm excited to join Buzzvel's team of talented professionals who are passionate about pushing the boundaries of technology. I believe my skills in full stack web development align perfectly with Buzzvel's commitment to innovation and delivering exceptional solutions.",
    image: whyCard_1,
    focalPoint: null,
  },
  {
    _id: createId(),
    title: "Thriving in a Collaborative Environment",
    content: "Buzzvel's emphasis on teamwork and collaboration resonates strongly with my own values. I'm confident in my ability to work effectively with cross-functional teams and contribute to a positive and productive work culture.",
    image: whyCard_2,
    focalPoint: {transformOrigin: 'bottom'},
  },
  {
    _id: createId(),
    title: "A Strong Technical Foundation",
    content: "My expertise in web development aligns seamlessly with Buzzvel's focus on cutting-edge solutions. I'm eager to leverage my skills to contribute to exciting projects and drive innovation within the team.",
    image: whyCard_3,
    focalPoint: null,
  },
  {
    _id: createId(),
    title: "Opportunities for Growth and Development",
    content: "I'm attracted to Buzzvel's commitment to employee development and mentorship. I believe that joining the team will provide me with opportunities to learn from experienced professionals and advance my career.",
    image: whyCard_4,
    focalPoint: null,
  }
]