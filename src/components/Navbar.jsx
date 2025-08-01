import { useState } from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {

   const [nav,setNav] = useState(false);

   const handleClick = ()=>setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex  justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h1 className=' text-[#EA5455] text-3xl  font-bold'>Portfolio</h1>
      </div>

      {/* menu */}

        <ul className='hidden md:flex'>
            <li>
              <Link to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li>
            <Link to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li>
            <Link to='skills' smooth={true} duration={500}>Skills</Link>
            </li>
            <li>
            <Link to='work' smooth={true} duration={500}>Work</Link>
            </li>
            <li>
            <Link to='contact' smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>
    

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav?<FaBars />:<FaTimes/>}
      </div>

      {/* mobile menu */}
      <ul className={!nav?'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link> 
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='work' smooth={true} duration={500}>Work</Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>

      {/* social icons */}
      <div className='hidden fixed lg:flex flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-blue-600 duration-300'>
            <a className='w-full flex justify-between items-center text-gray-300' href="https://www.linkedin.com/in/vamsihanumantu/" target='_blank'>
                LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-[#333333] duration-300' target='_blank'>
            <a className='w-full flex justify-between items-center text-gray-300' href="https://github.com/VamsiHanumantu">
                Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-[#6fc2b0] duration-300'>
            <a className='w-full flex justify-between items-center text-gray-300' href="">
               Mail  <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-[#565f69] duration-300'>
            <a className='w-full flex justify-between items-center text-gray-300' href="">
               Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
