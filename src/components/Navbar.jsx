import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
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

      {/* Social Icons */}
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="w-full flex justify-between items-center text-gray-300"
              href="https://www.linkedin.com/in/vamsihanumantu/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="w-full flex justify-between items-center text-gray-300"
              href="https://github.com/VamsiHanumantu"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="w-full flex justify-between items-center text-gray-300"
              href="mailto:vamsihanumantu@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="w-full flex justify-between items-center text-gray-300"
              href="/Vamsi_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
