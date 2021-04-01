import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Hello and welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Rosita',
  subtitle: 'I\'m your modern day polymath',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'rosita.jpg',
  paragraphOne: 'Rosita Bannert is a cross disciplinary web engineer, designer and linguist, with a penchant for mixing the disciplines. She studied arts and sciences at UCL and continues her education by translating documents from Chinese to English and vice versa, she was picked to work alongside the Culture Youth Forum in Jeju, Korea, for 2 years running, and her day job involves being part of a large development team to make apps. ',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: 'https://docs.google.com/document/d/1jCpEJ7_nN_f2aKDazYTKZwVV-u6hKaLd_y9bJGHkhgY/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Mini calculator',
    info: 'Try it out for yourself.',
    info2: 'A simple react-calculator.',
    url: './Projects/Calculator2/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ceasefire.jpg',
    title: 'Album Art',
    info: 'Album design for Eli Bre, singer and songwriter',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Toggle the Theme',
    info: '',
    info2: '',
    url: './Projects/ContextSwitching',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
