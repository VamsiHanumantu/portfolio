

const About = () => {
  return (
    <div name='about' className="w-full bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
           <div className="sm:text-right pb-8 pl-4">
             <p className="text-4xl inline font-bold border-b-4 border-pink-600">About</p>
           </div>
           <div>  </div>
        </div>
           <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div>
                <p className="sm:text-right text-4xl font-bold">Hi, I am Vamsi, nice to meet you. Please take look around</p>
            </div>
            <div>
                <p className=" text-justify">
                Welcome to my portfolio! I am a versatile software engineer with expertise in a diverse range of programming languages, web technologies, and frameworks. With a strong foundation in C, C++, Java, and Python, I possess the agility to tackle any programming challenge that comes my way. My proficiency extends to web development, where I craft elegant and responsive user interfaces using HTML, CSS, and JavaScript.

                In addition to my programming skills, I specialize in cutting-edge technologies such as machine learning and natural language processing. Leveraging these tools, I am passionate about solving complex problems and extracting insights from data.

                Frameworks like React JS and Tailwind CSS are my go-to choices for building modern and efficient web applications. Alongside, I harness the power of MySQL to design robust databases that ensure seamless data management and retrieval.

                With a keen eye for detail and a commitment to excellence, I thrive in collaborative environments where innovation flourishes. Whether it's crafting intuitive user experiences or developing scalable machine learning models, I am dedicated to delivering solutions that exceed expectations.

                Explore my portfolio to see how my skills and experience can bring your projects to life. Let's collaborate and turn ideas into reality!
                </p>
            </div>

           </div>
        </div>
      </div>
  )
}

export default About
