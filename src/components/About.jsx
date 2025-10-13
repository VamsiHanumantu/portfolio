const About = () => {
  return (
    <div name="about" className="w-full bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-3xl font-bold text-white">
              Hi, I'm Vamsi. Nice to meet you.<br /> Please take a look around.
            </p>
          </div>
          <div className="space-y-4 text-justify">
            <p>
              I'm <span className="font-semibold text-white">Vamsi Hanumantu</span>, a results-driven{' '}
              <span className="font-semibold text-white">Java Full Stack Developer</span> with a solid foundation in building robust and user-friendly web applications. With expertise in{' '}
              <span className="font-semibold text-white">Java, Spring Boot, React.js, and MySQL</span>, I craft clean, scalable code that brings real-world solutions to life.
            </p>

            <p>
              I have hands-on experience in designing and developing end-to-end systems — from intuitive frontend interfaces using{' '}
              <span className="font-semibold text-white">React</span> and{' '}
              <span className="font-semibold text-white">Tailwind CSS</span> to powerful, secure backend APIs using{' '}
              <span className="font-semibold text-white">Spring Boot</span> and{' '}
              <span className="font-semibold text-white">JWT authentication</span>. I’ve also worked with{' '}
              <span className="font-semibold text-white">MongoDB, Oracle</span>, and{' '}
              <span className="font-semibold text-white">RESTful APIs</span> to build data-intensive applications.
            </p>

            <p>
              My approach combines strong problem-solving skills, attention to detail, and a deep understanding of both frontend and backend technologies. I’m comfortable working in agile environments and collaborating across teams to deliver high-quality software.
            </p>

            <p>
              I actively stay updated with modern tech stacks and love building real-time projects that make an impact. Whether it's creating a full-stack platform or optimizing API performance, I bring passion and precision to every line of code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
