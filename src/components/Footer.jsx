/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { RiFacebookFill, RiGithubFill, RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <div
      className="border-t border-t-dropDown h-[50px] w-full mt-auto flex justify-end"
    >
      <div className="h-full mr-auto md:mr-0 flex items-center justify-center px-[1rem]">
        <span className="text-mySlate">find me in:</span>
      </div>
      <div className="w-[50px] h-full flex items-center border border-dropDown border-t-0 border-r-0 justify-center">
        <a href="https://www.instagram.com/antra_010/?hl=id" target="blank"><RiInstagramFill className="text-lg text-mySlate hover:text-white transition-all duration-200 cursor-pointer" /></a>
      </div>
      <div className="w-[50px] h-full md:mr-auto md:border-r flex items-center border border-dropDown border-t-0 border-r-0 justify-center">
        <a href="https://www.facebook.com/saskiya.affifah.5" target="_blank" rel="noopener noreferrer"><RiFacebookFill className="text-lg text-mySlate hover:text-white transition-all duration-200 cursor-pointer" /></a>
      </div>
      <div className="w-[50px] md:w-auto md:px-[1rem] h-full flex items-center border border-dropDown border-t-0 border-r-0 justify-center cursor-pointer">
        <a href="https://github.com/luxuling" target="blank" className="text-mySlate hover:text-myWhite transition-all duration-200 cursor-pointer flex gap-2"><span className="hidden md:inline">@lixuling</span>
          <RiGithubFill className="text-lg md:text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
