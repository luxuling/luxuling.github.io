import React, { useState } from 'react';
import {
  RiArrowRightSFill, RiArrowRightSLine, RiFile3Fill, RiFolder3Fill, RiMailFill, RiTerminalBoxFill, RiWhatsappFill,
} from 'react-icons/ri';
import {
  Link, Outlet,
} from 'react-router-dom';
import Footer from '../components/Footer';

const About = () => {
  const [clickFile, setClickFile] = useState(0);
  const [fileActive, setFileActive] = useState(0);
  const [personalInfo, setPersonalInfo] = useState(false);
  const [hobbies, setHobbies] = useState(false);
  const [contacts, setContacts] = useState(false);
  const [hobbiesFile, setHobbiesFile] = useState(false);
  const [contactsFile, setContactsFile] = useState(false);
  const folders = [
    {
      name: 'bio',
      file: 'bio_txt.txt',
      link: '',
    },
    {
      name: 'interests',
      file: 'interests_txt.txt',
      link: 'interest',
    },
    {
      name: 'educations',
      file: 'educations_txt.txt',
      link: 'educations',
    },
  ];
  return (
    <div className="h-auto md:h-screen flex flex-col w-full bg-lightPrimary pt-[60px] md:pt-[51px]">
      <div className="w-full h-[65px] px-[2rem] flex items-center text-myWhite md:hidden">
        <h1>_about</h1>
      </div>
      <div className="block md:flex w-full h-full">
        <div className="w-[50px] h-full hidden md:flex border-r border-dropDown">
          <div className="w-full text-mySlate h-[50px] flex justify-center items-center text-xl">
            <RiTerminalBoxFill />
          </div>
        </div>
        <div className="w-full md:w-[306px] md:h-full md:border-r md:border-dropDown flex flex-col gap-1 md:gap-0">
          <div className="w-full">
            <div className="w-full h-[31px] text-myWhite bg-dropDown md:bg-transparent md:border-b border-dropDown flex items-center px-[2rem] gap-3" onClick={() => setPersonalInfo(!personalInfo)}>
              <RiArrowRightSFill className={`text-lg ${personalInfo && 'rotate-90'}`} />
              <span className="cursor-pointer hover:text-mySlate">personal-info</span>
            </div>
            {personalInfo && (
            <div className="h-auto w-full py-2">
              {folders.map((folder, i) => {
                return (
                  <div className="w-full px-[2rem]">
                    <div className="flex gap-2 items-center h-[31px] cursor-pointer" onClick={() => setClickFile(i)}>
                      <RiArrowRightSLine className={`text-mySlate ${clickFile === i && 'rotate-90'}`} />
                      <RiFolder3Fill className={`${i === 0 && 'text-linkColor'} ${i === 1 && 'text-myGreen'} ${i === 2 && 'text-myBlue'}`} />
                      <span className={`${clickFile === i ? 'text-myWhite' : 'text-mySlate'}`}>{folder.name}</span>
                    </div>
                    <div className={`${clickFile === i ? 'h-[31px] visible' : 'h-0 invisible scale-0'} w-full pl-[2rem] ${fileActive === i ? 'text-myWhite' : 'text-mySlate'} text-sm flex  items-center gap-2 transition-all ease-in-out duration-200 hover:text-myWhite cursor-pointer`} onClick={() => setFileActive(i)}>
                      <RiFile3Fill />
                      <span><Link to={folder.link}>{folder.file}</Link></span>
                    </div>
                  </div>
                );
              })}
            </div>
            )}
          </div>
          <div className="w-full">
            <div className={`w-full h-[31px] text-myWhite bg-dropDown md:bg-transparent md:border-b ${personalInfo ? 'md:border-t' : 'md:border-t-0'} border-dropDown  flex items-center px-[2rem] gap-3`} onClick={() => setHobbies(!hobbies)}>
              <RiArrowRightSFill className={`text-lg ${hobbies && 'rotate-90'}`} />
              <span className="hover:text-mySlate cursor-pointer">hobbies</span>
            </div>
            {hobbies && (
            <div className="w-full py-2 px-[2rem]">
              <div className="w-full flex gap-2 h-[31px] items-center cursor-pointer" onClick={() => setHobbiesFile(!hobbiesFile)}>
                <RiArrowRightSLine className={`text-mySlate ${hobbiesFile && 'rotate-90'}`} />
                <RiFolder3Fill className="text-myGreen" />
                <span className={`${hobbiesFile ? 'text-myWhite' : 'text-mySlate'} hover:text-myWhite`}>my-hobbies</span>
              </div>
              <div className={`${hobbiesFile ? 'h-[31px] visible' : 'h-0 invisible scale-0'} px-[2rem] flex items-center gap-2 text-mySlate text-sm transition-all ease-in-out duration-200 hover:text-myWhite cursor-pointer`}>
                <RiFile3Fill />
                <Link to="hobbies">hobbie_txt.txt</Link>
              </div>
            </div>
            )}
          </div>
          <div className="w-full">
            <div className={`w-full h-[31px] text-myWhite bg-dropDown md:bg-transparent md:border-b ${hobbies ? 'md:border-t' : 'md:border-t-0'}  border-dropDown  flex items-center px-[2rem] gap-3`} onClick={() => setContacts(!contacts)}>
              <RiArrowRightSFill className={`text-lg ${contacts && 'rotate-90'}`} />
              <span className="hover:text-mySlate cursor-pointer">contacts</span>
            </div>
            {contacts && (
            <div className="w-full py-2">
              <div className="w-full flex gap-2 h-[31px] items-center cursor-pointer px-[2rem]" onClick={() => setContactsFile(!contactsFile)}>
                <RiArrowRightSLine className={`text-mySlate ${contactsFile && 'rotate-90'}`} />
                <RiFolder3Fill className="text-linkColor" />
                <span className={`${contactsFile ? 'text-myWhite' : 'text-mySlate'}`}>my-contacts</span>
              </div>
              <div className={`${contactsFile ? 'h-[31px] visible' : 'h-0 invisible scale-0'} flex items-center gap-2 text-mySlate text-sm transition-all ease-in-out duration-200 hover:text-myWhite cursor-pointer ml-[2rem]`}>
                <RiMailFill />
                <a href="mailto:antonisaputra049@gmail.com">antonisaputra049@gmail.com</a>
              </div>
              <div className={`${contactsFile ? 'h-[31px] visible' : 'h-0 invisible scale-0'} px-[2rem] flex items-center gap-2 text-mySlate text-sm transition-all ease-in-out duration-200 hover:text-myWhite cursor-pointer`}>
                <RiWhatsappFill />
                <a href="https://wa.link/nu2nqw" target="blank">+6287819444100</a>
              </div>
            </div>
            )}
          </div>
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default About;
