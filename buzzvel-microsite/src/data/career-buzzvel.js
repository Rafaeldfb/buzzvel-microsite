import { createId } from '@/helpers/utilities'

export const careerTimeline = {
  timeSeries: {
    buzzvel: [
      {
        _id: createId(),
        type: 'highlight',
        date: new Date(2028, 0),
        company: 'Buzzvel',
        content: 'Continued to drive innovation and excellence at Buzzvel, representing the company at industry events, and ensuring the implementation of cutting-edge technologies.',
      },
      {
        _id: createId(),
        type: 'highlight',
        date: new Date(2027, 0),
        company: 'Buzzvel',
        content: 'Assumed a leadership role as a Lead Developer, overseeing multiple projects, managing teams, and contributing to the strategic direction of the front-end development.',
      },
      {
        _id: createId(),
        type: 'highlight',
        date: new Date(2026, 6),
        company: 'Buzzvel',
        content: 'Initiated and led strategic innovation projects, driving technological advancements and proposing new methodologies to enhance Buzzvel’s competitive edge.',
      },
      {
        _id: createId(),
        type: 'highlight',
        date: new Date(2026, 0),
        company: 'Buzzvel',
        content: 'Transitioned into a Senior Developer role, taking ownership of larger projects and mentoring junior developers to foster team growth and knowledge sharing.',
      },
      {
        _id: createId(),
        type: 'highlight',
        date: new Date(2025, 6),
        company: 'Buzzvel',
        content: 'Became a key contributor to the development of advanced features, leading small to medium-sized projects and enhancing team collaboration.',
      },
      {
        _id: createId(),
        type: 'highlight',
        date: new Date(2025, 0),
        company: 'Buzzvel',
        content: 'Successfully led initial projects, demonstrating proficiency in Buzzvel’s tech stack and contributing to key product features.',
      },
      {
        _id: createId(),
        type: 'highlight',
        date: new Date(2024, 9),
        company: 'Buzzvel',
        content: 'Joined Buzzvel as a Full Stack Developer, focusing on onboarding, learning the company’s processes, and integrating into the team.',
      },
    ]
  },
  order: ['buzzvel'],
  icons: {
    buzzvel: [
      'html5',
      'css3',
      'javascript',
      'typescript',
      'react',
      'nextjs',
      'node',
      'mongodb',
      'graphql',
      'git',
      'github',
      'docker',
      'aws',
    ]
  }
}
