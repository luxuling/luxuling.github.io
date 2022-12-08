/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import {
  RiCss3Fill, RiHtml5Fill, RiReactjsFill,
} from 'react-icons/ri';
import { SiTailwindcss } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';

import mapala from '../assets/img/mapala.png';

const projectArray = [
  {
    name: 'freelance-web-collage',
    icon: RiCss3Fill,
    color: 'bg-reactColor',
    tech: 'css',
    desc: 'Project ordered by a student who wants to create a page for his organization.',
    pic: mapala,
    link: 'https://github.com/luxuling/youtube-web-clone',
  },
  {
    name: 'slicing-figma-desaign',
    icon: RiHtml5Fill,
    color: 'bg-linkColor',
    tech: 'html',
    desc: "This is someone on tiktok's figma design slicing project.",
    pic: './assets/img/healing.png',
    link: 'https://github.com/luxuling/youtube-web-clone',
  },
  {
    name: 'freelance-portfoli-web',
    icon: RiReactjsFill,
    color: 'bg-reactColor',
    tech: 'react',
    desc: "This is my friend's order to make a responsive website portfolio.",
    pic: './assets/img/tuntong.png',
    link: 'https://ilhamquro.github.io/',
  },
  {
    name: 'youtube-web-clone',
    icon: RiReactjsFill,
    color: 'bg-reactColor',
    tech: 'react',
    desc: 'youtube clone almost all fitures and responsive project with api from rapidapi.',
    pic: './assets/img/yt.png',
    link: 'https://github.com/luxuling/youtube-web-clone',
  },
  {
    name: 'whatapp-web-clone',
    icon: RiReactjsFill,
    color: 'bg-reactColor',
    tech: 'react',
    desc: 'whatsapp web clone almost all fitures.',
    pic: './assets/img/wa.png',
    link: 'https://github.com/luxuling/react-whatsappweb-clone',
  },
  {
    name: 'front-end-chat-app',
    icon: RiReactjsFill,
    color: 'bg-reactColor',
    tech: 'react',
    desc: 'Make chat app ui with react and tailwindcss and fetch my own api.',
    pic: './assets/img/frchat.png',
    link: 'https://github.com/luxuling/front-end-chat-app',
  },
  {
    name: 'rest-full-api-chat',
    icon: GrNode,
    color: 'bg-myGreen',
    tech: 'nodejs',
    desc: 'This api are use in my chat app, created with express and mongoDB.',
    pic: './assets/img/bcchat.jpg',
    link: 'https://github.com/luxuling/rest-full-api-chat',
  },
  {
    name: 'fitnes-app',
    icon: RiReactjsFill,
    color: 'bg-reactColor',
    tech: 'react',
    desc: 'Make fitnes app with react and tailwind and fetch api from rapidapi.',
    pic: './assets/img/ftapp.png',
    link: 'https://github.com/luxuling/fitness-APP',
  },
  {
    name: 'portfolio-web-tailwindcss',
    icon: SiTailwindcss,
    color: 'bg-reactColor',
    tech: 'tailwindcss',
    desc: 'First portfolio website are created use tailwindcss.',
    pic: './assets/img/tailwind-pr.png',
    link: 'https://github.com/luxuling/portfolio-tailwindcss',
  },
  {
    name: 'responsive-vanilla-website',
    icon: SiTailwindcss,
    color: 'bg-reactColor',
    tech: 'tailwindcss',
    desc: 'Responsive vanilla web that i build for submiting asignment in dicoding.',
    pic: './assets/img/vanila.png',
    link: 'https://github.com/luxuling/portfolio-tailwindcss',
  },
];
export default projectArray;
