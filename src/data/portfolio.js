import { createId } from '@/helpers/utilities';

import viplant from '@/../public/images/portfolio-carousel/carousel-viplant.webp';
import traquinices from '@/../public/images/portfolio-carousel/carousel-traquinices.webp';
import dbs from '@/../public/images/portfolio-carousel/carousel-dbs.webp';
import missCan from '@/../public/images/portfolio-carousel/carousel-miss-can.webp';
import thinkFeridas from '@/../public/images/portfolio-carousel/carousel-thinkferidas.webp';
import vigiasDaArriba from '@/../public/images/portfolio-carousel/carousel-vigias-da-arriba.webp';
import portugalAdvancedHealth from '@/../public/images/portfolio-carousel/carousel-portugal-advanced-health.webp';

export const portfolio = [
  {
    _id: createId(),
    name: 'Viplant',
    type: 'e-commerce',
    description: "We created a new website for VIPLANT with the main aim of enhancing the user experience, extending the quality of the physical purchase to the digital environment.",
    link: 'https://buzzvel.com/portfolio/viplant',
    image: viplant,
  },
  {
    _id: createId(),
    name: 'Traquinices',
    type: 'Retail',
    description: "Traquinices is a company that was born in Portugal in 1996. It specializes in the distribution of premium Childcare products to provide the best satisfaction to customers.",
    link: 'https://buzzvel.com/portfolio/traquinices',
    image: traquinices,
  },
  {
    _id: createId(),
    name: 'DBS',
    type: 'Health',
    description: 'We built this platform and APP that allowed primary users to track medical tests.',
    link: 'https://buzzvel.com/portfolio/dbs',
    image: dbs,
  },
  {
    _id: createId(),
    name: 'Miss Can',
    type: 'E-commerce',
    description: "A Portuguese and family project of the canning industry with 3 generations of history and tradition. Canned food produced in Portugal, with Portuguese fish and artisanal.",
    link: 'https://buzzvel.com/portfolio/miss-can',
    image: missCan,
  },
  {
    _id: createId(),
    name: 'ThinkFeridas',
    type: 'Health Wound App',
    description: "ThinkFeridas is an application that responds to the need of many health professionals who work alone in the clinical decision regarding treating complex wounds.",
    link: 'https://buzzvel.com/portfolio/thinkferidas',
    image: thinkFeridas,
  },
  {
    _id: createId(),
    name: 'Vigias da Arriba',
    type: 'Luxury Real State Microsite',
    description: "Vigias da Arriba is a luxury, unique and exclusive condominium with several villas with a superb sea view. It is located in Torres Vedras.",
    link: 'https://buzzvel.com/portfolio/vigias-da-arriba',
    image: vigiasDaArriba,
  },
  {
    _id: createId(),
    name: 'Portugal Advanced Health',
    type: 'Health CRM & Website & Call Center System',
    description: "Portugal Advanced Health or PAH is an innovative and pioneering project in the area of health in Portugal, specializing in hyperbaric treatments at 1.4atm (atmosphere).",
    link: 'https://buzzvel.com/portfolio/portugal-advanced-health',
    image: portugalAdvancedHealth,
  },
];

