
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import mysql from '../assets/mysql.png'
import cpp from '../assets/cpp.png'
import java from '../assets/java.png'
import python from '../assets/python.png'
import skills from '../data/skills.json'
const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#0a192f] text-gray-300'>

        {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl inline font-bold border-b-4 border-pink-600 '>Skills</p>
            <p className='py-4'>These are the technologies I have worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            {
                skills.map((skill,id)=>{
                    return  <div key={id} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                               <img className='w-20 mx-auto' src={skill.logo} alt="" />
                               <p className='my-4'>{skill.name}</p>
                           </div>
                })
            }
           
            {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="" />
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="" />
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="" />
                <p className='my-4'>Tailwind</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={mysql} alt="" />
                <p className='my-4'>MySql</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 h-20 mx-auto' src={cpp} alt="" />
                <p className='my-4'>C++</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 h-20 mx-auto' src={java} alt="" />
                <p className='my-4'>JAVA</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={python} alt="" />
                <p className='my-4'>Python</p>
            </div> */}
           
        </div>
      </div>  
      
    </div>
  )
}

export default Skills
