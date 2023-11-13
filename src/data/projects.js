/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import {
  RiCss3Fill, RiHtml5Fill, RiReactjsFill,
} from 'react-icons/ri';
import { SiTailwindcss } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';

import mapala from '../assets/img/mapala.png';
import bcchat from '../assets/img/bcchat.jpg';
import frchat from '../assets/img/frchat.png';
import ftapp from '../assets/img/ftapp.png';
import healing from '../assets/img/healing.png';
import tailwindpr from '../assets/img/tailwindpr.png';
import tuntong from '../assets/img/tuntong.png';
import yt from '../assets/img/yt.png';
import wa from '../assets/img/wa.png';
import vanilla from '../assets/img/vanila.png';
import music from '../assets/img/music.png';
import exportPng from '../assets/img/export.png';
import fns from '../assets/img/fns.png';
import rdx from '../assets/img/rdx.png';

const projectArray = [
  {
    name: 'radix-tailwind',
    icon: RiReactjsFill,
    color: 'bg-reactColor',
    tech: 'react',
    desc: 'Project that i created for someone to implement radix with tailwind.',
    pic: rdx,
    link: 'https://radix-tailwind.netlify.app/',
  },
  {
    name: 'freelance-web-property',
    icon: RiReactjsFill,
    color: 'bg-reactColor',
    tech: 'react',
    desc: 'Project ordered by company that want to sell a property.',
    pic: fns,
    link: 'https://funnisaresidence.com/',
  },
  {
    name: 'freelance-web-export',
    icon: RiReactjsFill,
    color: 'bg-reactColor',
    tech: 'react',
    desc: 'Project ordered by company that provide some export product.',
    pic: exportPng,
    link: 'https://hakatagroup.com/',
  },
  {
    name: 'freelance-web-music',
    icon: RiReactjsFill,
    color: 'bg-reactColor',
    tech: 'react',
    desc: 'Project ordered by music group.',
    pic: music,
    link: 'http://frmusikproduction.com/',
  },
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
    pic: healing,
    link: 'https://github.com/luxuling/youtube-web-clone',
  },
  {
    name: 'freelance-portfoli-web',
    icon: RiReactjsFill,
    color: 'bg-reactColor',
    tech: 'react',
    desc: "This is my friend's order to make a responsive website portfolio.",
    pic: tuntong,
    link: 'https://ilhamquro.github.io/',
  },
  {
    name: 'youtube-web-clone',
    icon: RiReactjsFill,
    color: 'bg-reactColor',
    tech: 'react',
    desc: 'youtube clone almost all fitures and responsive project with api from rapidapi.',
    pic: yt,
    link: 'https://github.com/luxuling/youtube-web-clone',
  },
  {
    name: 'whatapp-web-clone',
    icon: RiReactjsFill,
    color: 'bg-reactColor',
    tech: 'react',
    desc: 'whatsapp web clone almost all fitures.',
    pic: wa,
    link: 'https://github.com/luxuling/react-whatsappweb-clone',
  },
  {
    name: 'front-end-chat-app',
    icon: RiReactjsFill,
    color: 'bg-reactColor',
    tech: 'react',
    desc: 'Make chat app ui with react and tailwindcss and fetch my own api.',
    pic: frchat,
    link: 'https://github.com/luxuling/front-end-chat-app',
  },
  {
    name: 'rest-full-api-chat',
    icon: GrNode,
    color: 'bg-myGreen',
    tech: 'nodejs',
    desc: 'This api are use in my chat app, created with express and mongoDB.',
    pic: bcchat,
    link: 'https://github.com/luxuling/rest-full-api-chat',
  },
  {
    name: 'fitnes-app',
    icon: RiReactjsFill,
    color: 'bg-reactColor',
    tech: 'react',
    desc: 'Make fitnes app with react and tailwind and fetch api from rapidapi.',
    pic: ftapp,
    link: 'https://github.com/luxuling/fitness-APP',
  },
  {
    name: 'portfolio-web-tailwindcss',
    icon: SiTailwindcss,
    color: 'bg-reactColor',
    tech: 'tailwindcss',
    desc: 'First portfolio website are created use tailwindcss.',
    pic: tailwindpr,
    link: 'https://github.com/luxuling/portfolio-tailwindcss',
  },
  {
    name: 'responsive-vanilla-website',
    icon: SiTailwindcss,
    color: 'bg-reactColor',
    tech: 'tailwindcss',
    desc: 'Responsive vanilla web that i build for submiting asignment in dicoding.',
    pic: vanilla,
    link: 'https://github.com/luxuling/portfolio-tailwindcss',
  },
];
export default projectArray;
