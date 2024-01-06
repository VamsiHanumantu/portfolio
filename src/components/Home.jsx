
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* container */}
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
         <p className='text-pink-600'>Hi, my name is</p>
         <h1 className='text-3xl sm:text-7xl font-bold text-[#ccd6f6]'>Vamsi Hanumantu</h1>
         <h2 className='text-3xl sm:text-7xl font-bold text-[#8892be]'>I am a Full Stack Developer </h2>
         <p  className='text-[#8892be] py-4 max-w-[700px]'>I am full-stack developer specializing in building exceptional digital experiences. Currently, I am focused on building responsive full stack web applications</p>
         <div>
          <button className='text-white border-2 group px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>  <Link to='work' smooth={true} duration={500}>View Work <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span></Link></button>
         </div>
       </div>
    </div>
  )
}

export default Home
