import { useInView } from 'framer-motion';
import { useLottie } from 'lottie-react';
import React, { useRef } from 'react';
import { RiChatSmile3Fill, RiCloseFill } from 'react-icons/ri';
import mouse from '../../assets/img/mouse.png';
import pp from '../../assets/img/pp.jpg';
import gym from '../../lotties/gym.json';
import game from '../../lotties/game.json';

const Hobbie = () => {
  const hobiRef = useRef(null);
  const hobiIsView = useInView(hobiRef);
  const gymOptions = {
    animationData: gym,
    loop: true,
  };
  const gameOptions = {
    animationData: game,
    loop: true,
  };
  const gameAnimate = useLottie(gameOptions);
  const gameAnimateMd = useLottie(gameOptions);
  const gymAnimate = useLottie(gymOptions);
  const gymAnimateMd = useLottie(gymOptions);
  const line = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 20; i++) {
    line.push(i);
  }
  return (
    <section className="md:h-full grow">
      <div
        ref={hobiRef}
        className={`w-full h-auto px-[2rem] py-[3rem] relative ${hobiIsView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'} transition-all ease-in-out duration-300 delay-200 md:hidden`}
      >
        <div className="w-[2rem] text-myWhite absolute right-[1rem] top-[2rem] animate-bounce">
          <img src={mouse} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-myWhite">// hobbies <span className="text-mySlate">/ my-hobbies</span></h1>
        </div>
        <div className="text-mySlate max-w-[320px] gap-4 flex-col flex mt-3">
          <p>I have several hobbies outside of web development, namely bodybuilding and playing several games.
          </p>
        </div>
        <div className="text-myWhite mt-10">
          <span>// some hobbies that i have</span>
        </div>
        <div className="flex gap-3 items-start mt-8">
          <div className="rounded-full h-[35px] w-[36px] overflow-hidden">
            <img src={pp} alt="" />
          </div>
          <div className="flex flex-col text-myBlue">
            <span>@lixuling</span>
            <span className="text-mySlate text-sm">5 month ago</span>
          </div>
          <div className="flex ml-auto items-center gap-3 text-mySlate">
            <RiChatSmile3Fill />
            <span className="hover:underline transition-all ease-in-out duration-300 cursor-pointer">details</span>
          </div>
        </div>
        <div className="w-full flex flex-col items-center py-[3rem] gap-7">
          <div className="flex flex-col gap-5 max-w-[330px]">
            <span className="text-mySlate">// gym (exercises)</span>
            <div className="w-full h-[230px] flex justify-center bg-mediumPrimary rounded-md">
              {gymAnimate.View}
            </div>
            <div className="border-t border-t-mySlate text-mySlate text-sm pt-3">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quis.</span>
            </div>
          </div>
          <div className="flex flex-col gap-5 max-w-[330px]">
            <span className="text-mySlate">// playing game pc/mobile</span>
            <div className="w-full h-[230px] flex justify-center items-center rounded-md overflow-hidden">
              {gameAnimate.View}
            </div>
            <div className="border-t border-t-mySlate text-mySlate text-sm pt-3">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quis.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col h-full w-full">
        <div className="border-b border-dropDown w-full text-mySlate overflow-hidden">
          <span className="w-[221px] h-[32px] border-r border-dropDown px-[1rem] flex items-center justify-between">hobbies_txt.txt <RiCloseFill /></span>
        </div>
        <div className="w-full h-full flex">
          <div className="w-1/2 flex">
            <div className="h-full w-[60px] flex flex-col items-center text-mySlate">
              {line.map((ln) => {
                return (
                  <span>{ln}</span>
                );
              })}
            </div>
            <div id="bio-md" className="h-full grow text-mySlate w-full overflow-y-scroll border-r border-dropDown">
              <div className="max-w-[450px] flex flex-col">
                <span>/*</span>
                <span>I have several hobbies outside of web development, namely bodybuilding and playing several games.</span>
                <span>*/</span>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col px-[1rem]">
            <div className="max-w-[480px] pb-[3rem] relative">
              <div className="w-[2rem] text-myWhite absolute right-[1rem] top-[2rem] animate-bounce">
                <img src={mouse} alt="" />
              </div>
              <div className="text-myWhite mt-10">
                <span>// some hobbies that i have</span>
              </div>
              <div className="flex gap-3 items-start mt-8">
                <div className="rounded-full h-[35px] w-[36px] overflow-hidden">
                  <img src={pp} alt="" />
                </div>
                <div className="flex flex-col text-myBlue">
                  <span>@lixuling</span>
                  <span className="text-mySlate text-sm">5 month ago</span>
                </div>
                <div className="flex ml-auto items-center gap-3 text-mySlate">
                  <RiChatSmile3Fill />
                  <span className="hover:underline transition-all ease-in-out duration-300 cursor-pointer">details</span>
                </div>
              </div>
              <div className="w-full flex flex-col items-center py-[3rem] gap-7">
                <div className="flex flex-col gap-5 max-w-[330px]">
                  <span className="text-mySlate">// gym (exercises)</span>
                  <div className="w-full h-[230px] flex justify-center  bg-mediumPrimary rounded-md">
                    {gymAnimateMd.View}
                  </div>
                  <div className="border-t border-t-mySlate text-mySlate text-sm pt-3">
                    <span>I like to go to the gym and do some exercises because it makes me feel more alive.</span>
                  </div>
                </div>
                <div className="flex flex-col gap-5 max-w-[330px]">
                  <span className="text-mySlate">// playing game pc/mobile</span>
                  <div className="w-full h-[230px] flex justify-center bg-mediumPrimary items-center rounded-md overflow-hidden">
                    {gameAnimateMd.View}
                  </div>
                  <div className="border-t border-t-mySlate text-mySlate text-sm pt-3">
                    <span>I also like to play games for entertainment after work, and also interact with my friends online.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbie;
