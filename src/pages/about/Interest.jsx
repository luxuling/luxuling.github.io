/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from 'react';
import { RiChatSmile3Fill, RiCloseFill } from 'react-icons/ri';
import { useInView } from 'framer-motion';
import '../../style/dracula-theme-primejs.css';
import Primjs from 'prismjs';
import pp from '../../assets/img/pp.jpg';
import { codeReact, codeNodejs } from '../../data/interest';
import mouse from '../../assets/img/mouse.png';

const Interest = () => {
  useEffect(() => {
    Primjs.highlightAll();
  }, []);
  const interestRef = useRef(null);
  const interestIsView = useInView(interestRef);
  const line = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 20; i++) {
    line.push(i);
  }
  return (
    <section className="md:h-full grow">
      <div
        ref={interestRef}
        className={`w-full h-auto px-[2rem] py-[3rem] relative ${interestIsView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'} transition-all ease-in-out duration-300 delay-200 md:hidden`}
      >
        <div className="w-[2rem] text-myWhite absolute right-[1rem] top-[2rem] animate-bounce">
          <img src={mouse} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-myWhite">// personal-info <span className="text-mySlate">/ interest</span></h1>
        </div>
        <div className="text-mySlate max-w-[320px] gap-4 flex-col flex mt-3">
          <p>I'm interested in various things related to website development, and even though I focus on the front end, I also learn about how restful APIs are made and take several courses.
          </p>
        </div>
        <div className="text-myWhite mt-10">
          <span>// Code snippet showcase some tech</span>
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
        <div className="mt-4">
          <span className="text-mySlate">// react</span>
          <pre className="language-javascript text-sm my-code">
            <code>{codeReact}</code>
          </pre>
        </div>
        <div className="mt-4">
          <span className="text-mySlate">// expressjs</span>
          <pre className="language-javascript text-sm my-code">
            <code>{codeNodejs}</code>
          </pre>
        </div>
      </div>

      <div className="hidden md:flex flex-col h-full w-full">
        <div className="border-b border-dropDown w-full text-mySlate overflow-hidden">
          <span className="w-[221px] h-[32px] border-r border-dropDown px-[1rem] flex items-center justify-between">interest_txt.txt <RiCloseFill /></span>
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
                <span>I'm interested in various things related to website development, and even though I focus on the front end, I also learn about how restful APIs are made and take several courses.</span>
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
                <span>// Code snippet showcase some tech</span>
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
              <div className="mt-4">
                <span className="text-mySlate">// react</span>
                <pre className="language-javascript text-sm my-code w-[450px]">
                  <code>{codeReact}</code>
                </pre>
              </div>
              <div className="mt-4">
                <span className="text-mySlate">// expressjs</span>
                <pre className="language-javascript text-sm my-code w-[450px]">
                  <code>{codeNodejs}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interest;
