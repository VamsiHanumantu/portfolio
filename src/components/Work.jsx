import projects from '../data/projects.json'
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa'

const Work = () => {
  return (
    <div name='work' className="w-full bg-[#0a192f] text-gray-300 py-20">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col w-full h-full">

        {/* Header */}
        <div className="pb-12">
          <p className="text-4xl font-bold inline border-pink-600 border-b-4">Work</p>
          <p className="py-6 text-gray-400">Check out some of my recent projects</p>
        </div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, id) => (
            <div
              key={id}
              className="group relative bg-[#112240] rounded-xl border border-[#1e3a5f] hover:border-pink-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-900/20 flex flex-col overflow-hidden"
            >
              {/* Gradient accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Top: Icon + Links */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <FaCode className="text-white text-lg" />
                  </div>
                  <div className="flex gap-3">
                    {project.source && (
                      <a href={project.source} target="_blank" rel="noreferrer"
                        className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                        title="Source Code">
                        <FaCode size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer"
                        className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                        title="Live Demo">
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-pink-400 transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-[#0a192f] text-gray-300 border border-[#1e3a5f]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Work
