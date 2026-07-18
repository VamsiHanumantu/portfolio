const achievements = [
  {
    icon: '⭐',
    title: '5-Star Performance Rating',
    desc: 'Earned a 5-Star Year-End Performance Rating at Cognizant for delivering impactful engineering work.',
  },
  {
    icon: '🏆',
    title: 'Doing the Right Thing Award',
    desc: 'Recognized by Cognizant for consistently delivering high-quality development stories and engineering contributions.',
  },
  {
    icon: '🧩',
    title: 'Employee Recognition — June 2026',
    desc: 'Formally recognized for valuable contributions to project delivery and engineering excellence.',
  },
  {
    icon: '💻',
    title: '230+ LeetCode Problems',
    desc: 'Solved 230+ DSA problems on LeetCode and secured Global Rank 2819 in TCS CodeVita Season 11 among 100K+ participants.',
  },
]

const About = () => {
  return (
    <div name="about" className="w-full bg-[#0a192f] text-gray-300 py-20">
      <div className="max-w-[1000px] mx-auto px-4">

        {/* Header */}
        <div className="pb-12">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
          <p className="py-4 text-gray-400">A little about me</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Professional Summary */}
          <div className="bg-[#112240] rounded-xl border border-[#1e3a5f] p-6 hover:border-pink-500 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-4 rounded-full bg-gradient-to-r from-violet-600 to-pink-600" />
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                Professional Summary
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm <span className="font-semibold text-white">Vamsi Hanumantu</span>, a{' '}
              <span className="font-semibold text-white">Backend Software Engineer</span> with{' '}
              <span className="font-semibold text-white">1 year 9 months</span> of experience building enterprise Java applications at{' '}
              <span className="font-semibold text-white">Cognizant Technology Solutions</span>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              My core stack is <span className="font-semibold text-white">Java, Spring Boot, Spring Security, Spring Data JPA</span>, and{' '}
              <span className="font-semibold text-white">REST APIs</span>. On the frontend, I work with{' '}
              <span className="font-semibold text-white">React, TypeScript, and Redux Toolkit</span>, with hands-on experience integrating modern UIs with legacy Java Servlet backends backed by{' '}
              <span className="font-semibold text-white">Oracle</span> databases.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm currently building deeper expertise in{' '}
              <span className="font-semibold text-white">Microservices architecture, Docker</span>, and distributed systems.
            </p>
          </div>

          {/* Achievements */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-1">
              <div className="h-0.5 w-4 rounded-full bg-gradient-to-r from-pink-600 to-rose-600" />
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Achievements
              </span>
            </div>
            {achievements.map((item, i) => (
              <div
                key={i}
                className="bg-[#112240] rounded-xl border border-[#1e3a5f] p-4 flex gap-4 items-start hover:border-pink-500 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-2xl mt-0.5">{item.icon}</span>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;

