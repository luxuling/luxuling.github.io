import React, { useEffect, useRef } from 'react';
import { RiChatSmile3Fill, RiCloseFill } from 'react-icons/ri';
import Primjs from 'prismjs';
import { useInView } from 'framer-motion';
import pp from '../../assets/img/pp.jpg';
// eslint-disable-next-line import/no-unresolved
import '../../style/dracula-theme-primejs.css';
import mouse from '../../assets/img/mouse.png';

const Bio = () => {
  useEffect(() => {
    Primjs.highlightAll();
  }, []);
  const bioRef = useRef(null);
  const bioIsView = useInView(bioRef);
  const line = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 20; i++) {
    line.push(i);
  }
  const code = `const magazine = ['two', 'times', 'three', 'is', 'not', 'four'];
  const note = ['two', 'times', 'is', 'four', 'two'];
  
  function checkNote() {
    for (const word of note) {
      const existingWord = magazine.indexOf(word);
      if (existingWord === -1) {
        console.log('No');
        return;
      }
      magazine.splice(existingWord, 1);
    }
  
    console.log('Yes'); 
  }
  checkNote();
  `;
  return (
    <section className="md:h-full grow">
      <div
        ref={bioRef}
        className={`w-full md:w-auto h-auto px-[2rem] py-[3rem] relative ${bioIsView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'} transition-all ease-in-out duration-300 delay-200 md:hidden`}
      >
        <div className="w-[2rem] text-myWhite absolute right-[1rem] top-[2rem] animate-bounce">
          <img src={mouse} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-myWhite">// personal-info <span className="text-mySlate">/ bio</span></h1>
        </div>
        <div className="text-mySlate max-w-[320px] gap-4 flex-col flex mt-3">
          <p>
            I am a web developer especially in the field of front end developer, I have more than 1 year of experience in this field. I can work as a freelancer or as an employee, so please see various info about me in other files on this website.
          </p>
        </div>
        <div className="text-myWhite mt-10">
          <span>// Code snippet showcase</span>
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
        <pre className="language-javascript text-sm my-code">
          <code>{code}</code>
        </pre>
      </div>
      <div className="hidden md:flex flex-col h-full w-full">
        <div className="border-b border-dropDown w-full text-mySlate overflow-hidden">
          <span className="w-[221px] h-[32px] border-r border-dropDown px-[1rem] flex items-center justify-between">bio_txt.txt <RiCloseFill /></span>
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
                <p>
                  I am a web developer especially in the field of front end developer, I have more than 1 year of experience in this field. I can work as a freelancer or as an employee, so please see various info about me in other files on this website.
                </p>
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
                <span>// Code snippet showcase</span>
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
              <pre className="language-javascript h-auto text-sm my-code w-[450px]">
                <code>{code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
