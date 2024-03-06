

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
                I am a passionate Full Stack Developer proficient in front-end technologies like HTML, CSS, JAvascript and React. Leveraging my skills in Node.js, Express, and MongoDB on the server side. My adaptability, collaborative mindset, and problem-solving skills make me an asset to any development team. Eager to contribute to cutting-edge projects, I am excited about the opportunity to innovate and create impactful web applications.</p>
            </div>

           </div>
        </div>
      </div>
  )
}

export default About
