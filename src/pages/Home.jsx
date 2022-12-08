import React from 'react';
import bgBlur1 from '../assets/svg/bgBlur1.svg';
import bgBlur2 from '../assets/svg/bgBlur2.svg';
import Footer from '../components/Footer';
import snake from '../assets/svg/snake.svg';
import SnakeGame from '../components/SnakeGame';

const Home = () => {
  return (
    <div className="h-screen flex flex-col w-full bg-lightPrimary pt-[60px]">
      <img src={bgBlur2} alt="" className="fixed blur-2xl right-0 top-[8rem] md:right-[7rem] md:top-[7rem] rotate-45" />
      <img src={bgBlur1} alt="" className="fixed top-[-3rem] blur-xl md:right-[20rem]" />
      <div className="relative z-[99] w-auto h-full px-[1rem] flex items-center justify-center gap-[4rem]">
        <div className="flex flex-col gap-[9rem] md:gap-[4rem]">
          <div className="text-myWhite w-full flex flex-col">
            <h1>Hi all. I am</h1>
            <h1 className="text-[3rem] w-[200px] md:w-auto">Antoni Saputra</h1>
            <span className="text-myGreen md:text-myBlue md:font-medium text-lg">{'> Front-end Developer'}</span>
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
