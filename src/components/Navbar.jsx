/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../utils/navbar/MobileMenu';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [clickedMenu, setClickedMenu] = useState(0);
  useEffect(() => {
    const menuStorage = localStorage.getItem('menu');
    if (menuStorage !== null) {
      setClickedMenu(JSON.parse(menuStorage));
    } else {
      localStorage.setItem('menu', JSON.stringify(0));
    }
    return () => {
      localStorage.clear();
    };
  }, []);
  const clickMenuHandler = (i) => {
    setClickedMenu(i);
    localStorage.setItem('menu', JSON.stringify(i));
  };
  const menuHandler = () => {
    document.getElementById('hamburger').classList.toggle('menu-active');
    setMenu(!menu);
  };
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
    <div className="fixed h-auto w-full  top-0 z-[999]">
      <div className="h-[60px] md:h-[50px] w-full border-b border-b-dropDown flex items-center justify-between md:justify-start px-[1rem] md:pr-0 bg-lightPrimary">
        <h1 className="text-mySlate h-full md:border-r flex items-center justify-start md:w-[230px] border-dropDown">antoni-saputra</h1>
        <div id="hamburger" className="w-[18px] h-[16px] flex flex-col justify-between cursor-pointer md:hidden" onClick={menuHandler}>
          <span className="h-[2px] w-full bg-mySlate transition-all ease-out duration-300" />
          <span className="h-[2px] w-full bg-mySlate transition-all ease-out duration-300" />
          <span className="h-[2px] w-full bg-mySlate transition-all ease-out duration-300" />
        </div>
        <div className="hidden md:flex w-full h-full">
          {listMenu.map((item, i) => {
            return (
              <Link to={item.link} key={i} className={`${clickedMenu === i ? 'text-myWhite border-b-[3px] border-b-orangeButton' : 'text-mySlate'} w-[122px] hover:text-myWhite h-full flex items-center justify-center cursor-pointer ${item.name === '_contact' ? 'ml-auto border-l border-dropDown' : 'border-r border-dropDown'}`} onClick={() => clickMenuHandler(i)}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
      <MobileMenu menu={menu} clickedMenu={clickedMenu} setClickedMenu={setClickedMenu} clickMenuHandler={clickMenuHandler} />
    </div>

  );
};

export default Navbar;
