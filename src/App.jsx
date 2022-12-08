import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';
import Bio from './utils/about/Bio';
import Educations from './utils/about/Educations';
import Hobbie from './utils/about/Hobbie';
import Interest from './utils/about/Interest';

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
