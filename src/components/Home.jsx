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
            I’m a Full Stack Developer
          </h2>
          <p className="text-[#8892be] text-justify py-4 max-w-[700px]">
            I build robust and responsive web applications using <span className="font-semibold text-white">Java, Spring Boot, React.js</span>, and <span className="font-semibold text-white">MySQL</span>. I love turning ideas into reality through clean, efficient, and scalable code.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link to="work" smooth={true} duration={500}>
              <button className="text-white border-2 group px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
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
