import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Index';
import About from './pages/about/Index';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';
import Bio from './pages/about/Bio';
import Educations from './pages/about/Educations';
import Hobbie from './pages/about/Hobbie';
import Interest from './pages/about/Interest';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="" element={<Bio />} />
          <Route path="interest" element={<Interest />} />
          <Route path="educations" element={<Educations />} />
          <Route path="hobbies" element={<Hobbie />} />
        </Route>
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
