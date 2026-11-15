import { HiArrowNarrowRight } from 'react-icons/hi';
import { HiDownload } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { ReactTyped } from 'react-typed';
import hero from '../assets/Vamsi_Hanumantu.jpg';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col-reverse md:flex-row items-center justify-center lg:justify-between h-full">

        {/* Text Section */}
        <div className="md:mr-8 text-center md:text-left">
          <p className="text-[#EA5455] text-xl mb-1">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6]">Vamsi Hanumantu</h1>

          {/* Typed animation */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#8892be] mt-3 flex items-center justify-center md:justify-start gap-2 flex-wrap">
            I'm a&nbsp;
            <ReactTyped
              strings={[
                'Software Engineer',
                'Full Stack Developer',
                'Java Developer',
                'Problem Solver',
                'React Developer',
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
              className="text-pink-500"
            />
          </h2>

          <p className="text-[#8892be] py-4 max-w-[560px] leading-relaxed text-center md:text-left">
            Backend Software Engineer at{' '}
            <span className="text-white font-semibold">Cognizant</span> — building{' '}
            <span className="text-white font-semibold">Spring Boot microservices</span> with{' '}
            <span className="text-white font-semibold">Spring Cloud, Resilience4j, JWT/OAuth2</span>, and{' '}
            <span className="text-white font-semibold">React & TypeScript</span> frontends.{' '}
            <span className="text-white font-semibold">AWS Certified Developer – Associate</span>.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 justify-center md:justify-start flex-wrap mt-1">
            <Link to="work" smooth={true} duration={500}>
              <button className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200">
                View Work
                <span className="group-hover:translate-x-1 duration-300">
                  <HiArrowNarrowRight />
                </span>
              </button>
            </Link>

            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <button className="group flex items-center gap-2 px-6 py-3 rounded-lg border border-pink-600 text-pink-400 font-semibold hover:bg-pink-600 hover:text-white hover:-translate-y-0.5 transition-all duration-200">
                Resume
                <HiDownload className="group-hover:translate-y-0.5 duration-300" />
              </button>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="mb-6 md:mb-0 flex-shrink-0">
          <img
            src={hero}
            alt="Vamsi Hanumantu"
            className="hidden lg:block rounded-full w-48 h-48 object-cover border-4 border-pink-600 shadow-lg shadow-pink-900/30"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
