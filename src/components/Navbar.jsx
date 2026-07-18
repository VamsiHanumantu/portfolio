import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]/90 backdrop-blur-sm border-b border-[#1e3a5f] text-gray-300 z-50">
      {/* Logo */}
      <div>
        <h1 className="text-[#EA5455] text-3xl font-bold">Portfolio</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
       <li>
        <Link to='experience' smooth={true} duration={500}>Experience</Link>
      </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>Work</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className="sm:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transition-opacity duration-300 ${
          nav ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className="py-6 text-4xl">
        <Link to='experience' onClick={handleClick} smooth={true} duration={500}>Experience</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>


    </div>
  );
};

export default Navbar;
