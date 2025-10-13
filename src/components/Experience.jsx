import React from 'react';

const experiences = [
  {
    company: 'Cognizant Technology Solutions',
    title: 'Programmer Analyst Trainee',
    date: 'Oct 2024 – Present',
    location: 'Chennai, India',
    description:
      `Currently working on a client-facing application using JSP, Servlets, and Oracle. I build scalable backend features, collaborate in Agile sprints, and ensure smooth deployments. Previously completed hands-on training in Spring Boot, React, and MySQL, building secure, RESTful web apps.`,
  },
  {
    company: 'Wisenet Automission Pvt. Ltd',
    title: 'Web Development Intern',
    date: 'Nov 2023 – Feb 2024',
    location: 'Visakhapatnam, India',
    description:
      `Built an interactive GPS dashboard with HTML, CSS, JS, and Bootstrap. Added real-time device tracking and historical distance features, which improved user visibility and post-release satisfaction. Worked closely with the core team to gather requirements and deliver features.`,
  },
];

const Experience = () => {
  return (
    <div name="experience" className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-16">
      <div className="max-w-[1000px] mx-auto px-8">
        <div className="pb-12">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Experience</p>
          <p className="py-4">// My professional journey so far</p>
        </div>

        <div className="relative border-l-4 border-pink-600 ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6 relative">
              {/* Dot */}
              <div className="absolute -left-4 top-2 w-4 h-4 bg-pink-600 rounded-full border-2 border-white"></div>

              {/* Card */}
              <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-pink-500 transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-[#ccd6f6]">{exp.company}</h3>
                <p className="text-pink-500 text-sm">{exp.title} · {exp.date}</p>
                <p className="text-gray-400 text-sm mb-2">{exp.location}</p>
                <p className="text-[#8892b0] leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
