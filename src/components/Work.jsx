import projects from '../data/projects.json'
import '../index.css'

const Work = () => {
  return (
    <div name='work' className="w-full md:h-screen bg-[#0a192f] text-gray-300">
       <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8" >
            <p className="text-4xl font-bold inline border-pink-600 border-b-4" >Work</p>
            <p className="py-6">Check some of my recent work</p>
        </div>

        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            {
                projects.map((project,id)=>{
                    console.log(project.imgsrc)
                    return (
                        <div key={id}
                        style={{backgroundImage:`url(${project.imgsrc})`}}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                           
                            {/* hover effects */}
                            <div className='opacity-0 group-hover:opacity-100' >
                                <span className='text-2xl text-white font-bold tracking-wider text-center'>
                                    {project.title}
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href={project.demo}>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold'>Demo</button>
                                    </a>
                                    <a href={project.source}>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
           
      
        </div>
       </div>
    </div>
  )
}

export default Work
