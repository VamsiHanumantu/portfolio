import skills from '../data/skills.json'

const categoryOrder = ['Languages', 'Frameworks', 'Databases', 'Tools', 'Concepts']

const categoryColors = {
  Languages:  'from-violet-600 to-indigo-600',
  Frameworks: 'from-cyan-500 to-blue-600',
  Databases:  'from-orange-500 to-amber-500',
  Tools:      'from-pink-600 to-rose-600',
  Concepts:   'from-emerald-500 to-teal-600',
}

const Skills = () => {
  // Group skills by category
  const grouped = categoryOrder.reduce((acc, cat) => {
    const items = skills.filter(s => s.category === cat)
    if (items.length) acc[cat] = items
    return acc
  }, {})

  return (
    <div name='skills' className='w-full bg-[#0a192f] text-gray-300 py-20'>
      <div className='max-w-[1000px] mx-auto px-4'>

        {/* Header */}
        <div className='pb-12'>
          <p className='text-4xl inline font-bold border-b-4 border-pink-600'>Skills</p>
          <p className='py-4 text-gray-400'>Technologies I've worked with</p>
        </div>

        {/* Grouped Categories */}
        <div className='flex flex-col gap-10'>
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category}>
              {/* Category Label */}
              <div className='flex items-center gap-3 mb-5'>
                <div className={`h-0.5 w-4 rounded-full bg-gradient-to-r ${categoryColors[category]}`} />
                <span className={`text-xs font-semibold uppercase tracking-widest bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent`}>
                  {category}
                </span>
                <div className={`flex-1 h-px bg-gradient-to-r ${categoryColors[category]} opacity-20`} />
              </div>

              {/* Skills Grid */}
              <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3'>
                {items.map((skill, i) => (
                  <div
                    key={i}
                    className='group flex flex-col items-center gap-2 p-3 rounded-xl bg-[#112240] border border-[#1e3a5f] hover:border-pink-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-900/20 transition-all duration-300 cursor-default'
                  >
                    {skill.logo ? (
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className='w-8 h-8 object-contain'
                        onError={(e) => { e.target.style.display = 'none' }}
                      />
                    ) : (
                      <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${categoryColors[category]} flex items-center justify-center`}>
                        <span className='text-white text-xs font-bold'>{skill.name.charAt(0)}</span>
                      </div>
                    )}
                    <span className='text-xs text-gray-400 group-hover:text-gray-200 text-center leading-tight transition-colors duration-200'>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Skills
