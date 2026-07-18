import React from 'react';

const experiences = [
  {
    company: 'Cognizant Technology Solutions',
    title: 'Programmer Analyst',
    date: 'Oct 2024 – Present',
    location: 'Chennai, India',
    bullets: [
      'Modernized legacy insurance claim-processing workflows by replacing JSP-based UIs with React, TypeScript, Redux Toolkit, and Tailwind CSS — integrated with a Java Servlet backend via RESTful APIs, resulting in an estimated 2× improvement in claim creation speed.',
      'Designed, developed, and integrated RESTful APIs within a multi-tier Java 8 Servlet enterprise application backed by Oracle databases.',
      'Resolved multiple production issues and designed inline validation for claim workflows, improving application stability, data accuracy, and UX.',
      'Built performance-focused POCs that improved operational efficiency by 15–25%, earning a 5-Star Year-End Performance Rating and formal recognition in June 2026.',
    ],
  },
  {
    company: 'Wisenet Automation Pvt. Ltd.',
    title: 'Web Development Intern',
    date: 'Nov 2023 – Feb 2024',
    location: 'Visakhapatnam, India',
    bullets: [
      'Developed and enhanced a GPS tracking dashboard using HTML, CSS, JavaScript, and Bootstrap, improving real-time device visibility and operational efficiency.',
      'Designed responsive, mobile-first user interfaces ensuring consistent cross-device performance.',
      'Collaborated with the development team to implement production-ready features based on business requirements and user feedback.',
    ],
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
                <p className="text-gray-400 text-sm mb-3">{exp.location}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-[#8892b0] leading-relaxed">{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
