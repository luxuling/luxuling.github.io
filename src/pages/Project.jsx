/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import {
  RiArrowRightSFill, RiCss3Fill, RiHtml5Fill, RiReactjsFill, RiFolder3Fill, RiCloseFill,
} from 'react-icons/ri';
import { SiTailwindcss } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import Footer from '../components/Footer';
import projectArray from '../data/projects';

const Project = () => {
  const [project, setProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
  const [displayProject, setDisplayProject] = useState(projectArray);
  const ProjectCategory = [
    {
      name: 'All',
      icon: <RiFolder3Fill />,
    },
    {
      name: 'React',
      icon: <RiReactjsFill />,
    },
    {
      name: 'HTML',
      icon: <RiHtml5Fill />,
    },
    {
      name: 'CSS',
      icon: <RiCss3Fill />,
    },
    {
      name: 'TailwindCSS',
      icon: <SiTailwindcss />,
    },
    {
      name: 'NodeJS',
      icon: <GrNode />,
    },
  ];
  const filterProject = (name) => {
    if (name === 'All') {
      return setDisplayProject(projectArray);
    }
    const filteredProjects = projectArray.filter((prop) => prop.tech.toLowerCase() === name.toLowerCase());
    setDisplayProject(filteredProjects);
  };
  return (
    <div
      className="min-h-screen md:h-screen w-full flex flex-col bg-lightPrimary pt-[60px] md:pt-[51px]"
    >
      <div className="w-full h-[65px] px-[2rem] flex items-center text-myWhite md:hidden">
        <h1>_projects</h1>
      </div>
      <div className="w-full md:flex h-full">
        <div className="w-full md:w-[306px] md:h-full md:border-r md:border-dropDown">
          <div className="w-full h-[31px] text-myWhite bg-dropDown md:bg-transparent md:border-b border-dropDown flex items-center px-[2rem] gap-3" onClick={() => setProject(!project)}>
            <RiArrowRightSFill className={`text-lg ${project && 'rotate-90'}`} />
            <span className="hover:text-mySlate cursor-pointer">_project</span>
          </div>
          {project && (
          <div className="h-auto w-full py-2">
            {ProjectCategory.map((category, i) => {
              return (
                <div
                  key={i}
                  className="flex h-[31px] items-center text-mySlate px-[3rem] gap-3 cursor-pointer"
                  onClick={() => {
                    setSelectedProject(i);
                    filterProject(category.name);
                  }}
                >
                  {category.icon}
                  <span className={`${selectedProject === i ? 'text-myWhite' : 'text-mySlate'}`}>{category.name}</span>
                </div>
              );
            })}
          </div>
          )}
        </div>
        <div className="w-full h-auto md:h-full md:w-auto grow relative">
          <div className="w-full px-[2rem] mt-7 md:hidden">
            <span className="text-myWhite">// projects <span className="text-mySlate">{ProjectCategory[selectedProject].name}</span></span>
          </div>
          <div className="hidden md:block fixed z-50 bg-lightPrimary border-b border-dropDown w-full text-mySlate overflow-hidden">
            <span className="max-w-[300px] h-[30px] border-r border-dropDown px-[1rem] flex items-center justify-between">// projects <span className="text-mySlate">{ProjectCategory[selectedProject].name}</span><RiCloseFill /></span>
          </div>
          <div className="w-full flex flex-col py-[2rem] md:py-[3rem] px-[2rem] items-center md:items-stretch gap-5 md:grid md:grid-cols-3 overflow-y-auto">
            {displayProject.map((item) => {
              return (
                <div className="w-[291px] md:h-auto">
                  <p className="text-myBlue font-medium text-sm truncate">Project <span className="text-mySlate">// {item.name}</span></p>
                  <div className="h-[328px] md:h-[314px] w-full bg-mediumPrimary border border-dropDown rounded-lg mt-3 relative">
                    <div className="h-[146px] flex w-full">
                      <img src={item.pic} alt="" />
                    </div>
                    <item.icon className={`${item.color} text-2xl rounded-sm absolute top-3 right-3`} />
                    <div className="p-[1.5rem] text-sm text-mySlate flex flex-col">
                      <span className="text-xs">{item.desc}</span>
                      <a href={item.link} target="blank" className="w-[129px] h-[38px] rounded-[8px] mt-5 bg-dropDown flex items-center justify-center hover:underline">view-project</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
