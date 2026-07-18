import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import hero from '../assets/Vamsi_Hanumantu.jpg';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col-reverse md:flex-row items-center  justify-center lg:justify-between h-full">
        {/* Text Section */}
        <div className="md:mr-8 text-center md:text-left">
          <p className="text-[#EA5455] text-xl">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6]">Vamsi Hanumantu</h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#8892be] mt-2">
            I'm a Backend Software Engineer
          </h2>
          <p className="text-[#8892be] text-justify py-4 max-w-[700px]">
            Building enterprise Java applications with <span className="font-semibold text-white">Spring Boot, REST APIs</span>, and <span className="font-semibold text-white">TypeScript</span>. Experienced in backend development, API integration, legacy modernization, and Agile delivery.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link to="work" smooth={true} duration={500}>
              <button className="group flex items-center gap-2 px-6 py-3 my-2 rounded-lg bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200">
                View Work
                <span className="group-hover:translate-x-1 duration-300">
                  <HiArrowNarrowRight />
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="mb-6 md:mb-0">
          <img
            src={hero}
            alt="Vamsi Hanumantu"
            className=" hidden lg:block rounded-full w-48 h-48 object-cover border-4 border-pink-600 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
