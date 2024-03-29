/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
import Typed from 'typed.js';
import bgBlur1 from '../assets/svg/bgBlur1.svg';
import bgBlur2 from '../assets/svg/bgBlur2.svg';
import Footer from '../components/Footer';
import SnakeGame from '../components/SnakeGame';

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const nameElement = React.useRef(null);
  const TEXTS = [
    'Front-End Engineer',
    'ReactJS Developer',
    'VueJS Developer',
  ];

  React.useEffect(() => {
    // typing animated iinitialize
    const typed = new Typed(nameElement.current, {
      strings: ['Antoni Saputra'],
      typeSpeed: 100,
      cursorChar: '_',
    });

    const intervalId = setInterval(
      () => setIndex((i) => i + 1),
      3000, // every 3 seconds
    );

    return () => {
      clearTimeout(intervalId);
      typed.destroy();
    };
  }, []);
  return (
    <div className="h-screen flex flex-col w-full bg-lightPrimary pt-[60px]">
      <img src={bgBlur2} alt="" className="fixed blur-2xl right-0 top-[8rem] md:right-[7rem] md:top-[7rem] rotate-45 animate-blurOne" />
      <img src={bgBlur1} alt="" className="fixed top-[-3rem] blur-xl md:right-[20rem] animate-blurTwo" />
      <div className="relative z-[99] w-auto h-full px-[1rem] flex items-center justify-center gap-[4rem]">
        <div className="flex flex-col gap-[9rem] md:gap-[4rem]">
          <div className="text-myWhite w-full flex flex-col">
            <h1>Hi all. I am</h1>
            <div className="w-auto inline-flex items-end md:pt-2 md:overflow-x-hidden  md:overflow-hidden">
              <h1 ref={nameElement} className="text-[3rem] max-w-[210px] lg:max-w-none" />
              {/* <span className="absolute hidden -bottom-0 left-0 -top-1 md:inline-block bg-lightPrimary w-full animate-type will-change"><span
                className="box-border inline-block w-1 h-10 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"
              />
              </span> */}
            </div>
            <span className="text-myGreen flex gap-2 md:text-myBlue md:font-medium text-lg">{'>'}
              <TextTransition springConfig={presets.wobbly}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </span>
          </div>
          <div className="md:w-[300px] lg:w-auto">
            <span className="text-mySlate hidden lg:block">// complete the game to continue</span>
            <span className="text-mySlate">// find my profile on Github:</span>
            <p className="text-myBlue">const <span className="text-myGreen">githubLink</span> <span className="text-white">=</span> <a className="text-linkColor underline cursor-pointer" target="blank" href="https://github.com/luxuling">https://github.com/luxuling</a></p>
          </div>
        </div>
        <div className=" hidden md:flex">
          <SnakeGame />
        </div>
      </div>
      <div className="hidden md:flex mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
