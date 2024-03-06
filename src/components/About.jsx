

const About = () => {
  return (
    <div name='about' className="w-full h-screen bg-[#0a192f] text-gray-300">
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
             I am eager to embark on a rewarding career as a Full Stack Developer, and I bring a solid foundation in web development coupled with hands-on experience. Proficient in front-end technologies such as HTML, CSS, and React, I specialize in creating responsive and interactive user interfaces that enhance the overall user experience. On the server side, I am adept at utilizing Node.js, Express, and MongoDB for efficient back-end development. My academic journey has been enriched by engaging in diverse projects which showcase my ability to conceptualize, design, and implement web applications. Committed to continuous learning, I stay updated on the latest industry trends and technologies, ensuring that my skills remain aligned with the dynamic landscape of web development. I am excited about the prospect of contributing my technical skills and creativity to a dynamic development team, fostering innovation, and making meaningful contributions to the field.</p>
            </div>

           </div>
        </div>
      </div>
  )
}

export default About
