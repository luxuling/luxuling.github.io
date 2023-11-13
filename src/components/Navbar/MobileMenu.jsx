/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { RiFacebookFill, RiGithubFill, RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const MobileMenu = ({
  menu, clickedMenu, clickMenuHandler,
}) => {
  const listMenu = [
    {
      name: '_hello',
      link: '/',
    },
    {
      name: '_about',
      link: '/about',
    },
    {
      name: '_projects',
      link: '/projects',
    },
    {
      name: '_contact',
      link: '/contact',
    },
  ];
  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          animate={{
            height: ['0vh', '100vh'],
          }}
          transition={{
            duration: 0.5,
          }}
          exit={{
            height: ['100vh', '0vh'],
          }}
          className="w-full flex flex-col pb-[60px] bg-lightPrimary"
        >
          {listMenu.map((item, i) => {
            return (
              <motion.div
                animate={{
                  opacity: [0, 1],
                  transition: {
                    delay: (i === 0 && 0.2) || (i === 1 && 0.4) || (i === 2 && 0.6) || (i === 3 && 0.7),
                  },
                }}
                exit={{
                  display: 'none',
                }}
                className="h-[60px] border-b border-b-dropDown px-[1rem] flex items-center"
                onClick={() => clickMenuHandler(i)}
              >
                <Link to={item.link} className={`${clickedMenu === i ? 'text-white' : 'text-mySlate'} cursor-pointer hover:text-myWhite transition-all duration-200`}>{item.name}</Link>
              </motion.div>
            );
          })}
          <motion.div
            animate={{
              opacity: [0, 1],
              transition: {
                delay: 1,
              },
            }}
            exit={{
              display: 'none',
            }}
            className="border-t border-t-mySlate h-[50px] w-full mt-auto flex justify-end"
          >
            <div className="h-full mr-auto flex items-center justify-center px-[1rem]">
              <span className="text-mySlate">find me in:</span>
            </div>
            <div className="w-[50px] h-full flex items-center border border-mySlate border-t-0 border-r-0 justify-center">
            <a href="https://www.instagram.com/antra_010/?hl=id" target="blank"><RiInstagramFill className="text-lg text-mySlate hover:text-white transition-all duration-200 cursor-pointer" /></a>
            </div>
            <div className="w-[50px] h-full flex items-center border border-mySlate border-t-0 border-r-0 justify-center">
            <a href="https://www.facebook.com/saskiya.affifah.5" target="_blank" rel="noopener noreferrer"><RiFacebookFill className="text-lg text-mySlate hover:text-white transition-all duration-200 cursor-pointer" /></a>
            </div>
            <div className="w-[50px] h-full flex items-center border border-mySlate border-t-0 border-r-0 justify-center">
            <a href="https://www.github.com/luxuling" target="_blank" rel="noopener noreferrer"><RiGithubFill className="text-xl text-mySlate hover:text-white transition-all duration-200 cursor-pointer" /></a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

  );
};

export default MobileMenu;
