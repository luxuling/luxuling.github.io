/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useRef } from 'react';
import { RiChatSmile3Fill, RiCloseFill } from 'react-icons/ri';
import '../../style/dracula-theme-primejs.css';
import { GoLinkExternal } from 'react-icons/go';
import { useInView } from 'framer-motion';
import pp from '../../assets/img/pp.jpg';
import mouse from '../../assets/img/mouse.png';
import certificate from '../../data/certificates';

const Educations = () => {
  const eduRef = useRef(null);
  const eduIsView = useInView(eduRef);
  const line = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 20; i++) {
    line.push(i);
  }
  return (
    <section className="md:h-full grow">
      <div
        ref={eduRef}
        className={`w-full h-auto px-[2rem] py-[3rem] relative ${eduIsView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'} transition-all ease-in-out duration-300 delay-200 md:hidden`}
      >
        <div className="w-[2rem] text-myWhite absolute right-[1rem] top-[2rem] animate-bounce">
          <img src={mouse} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-myWhite">// personal-info <span className="text-mySlate">/ educatons</span></h1>
        </div>
        <div className="text-mySlate max-w-[320px] gap-4 flex-col flex mt-3">
          <span>I'm a high school graduate, and I haven't gone to college yet, but I'm confident in my abilities in web development. and I have some course certificates from <a href="https://www.dicoding.com" target="blank" className="underline text-myBlue">dicoding.com</a></span>
        </div>
        <div className="text-myWhite mt-10">
          <span>// some certivicate that i earn</span>
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
        <div className="flex flex-col items-center mt-9 gap-3">
          {certificate.map((item) => {
            return (
              <div className="max-w-[350px] relative group hover:rounded-lg transition-all ease-in-out duration-300">
                <a href={item.link} target="blank" className="absolute cursor-pointer w-full h-full flex items-center justify-center text-myBlue backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 text-xl">
                  <GoLinkExternal />
                </a>
                <img src={item.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden md:flex flex-col h-full w-full">
        <div className="border-b border-dropDown w-full text-mySlate overflow-hidden">
          <span className="w-[221px] h-[32px] border-r border-dropDown px-[1rem] flex items-center justify-between">education_txt.txt <RiCloseFill /></span>
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
                <span>I'm a high school graduate, and I haven't gone to college yet, but I'm confident in my abilities in web development. and I have some course certificates from <a href="https://www.dicoding.com" target="blank" className="underline text-myBlue">dicoding.com</a></span>
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
                <span>// some certivicate that i earn</span>
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
              <div className="flex flex-col items-center mt-9 gap-3">
                {certificate.map((item) => {
                  return (
                    <div className="max-w-[350px] relative group hover:rounded-lg transition-all ease-in-out duration-300">
                      <a href={item.link} target="blank" className="absolute cursor-pointer w-full h-full flex items-center justify-center text-myBlue backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 text-xl">
                        <GoLinkExternal />
                      </a>
                      <img src={item.img} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educations;
