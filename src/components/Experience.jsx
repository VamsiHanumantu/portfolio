import React from 'react';

const experiences = [
  {
    company: 'Cognizant Technology Solutions',
    title: 'Programmer Analyst',
    date: 'Oct 2024 – Present',
    location: 'Chennai, India',
    bullets: [
      'Contributed to decomposing a legacy monolithic motor insurance platform into domain-driven Spring Boot microservices using the Strangler Fig pattern; designed and built RESTful APIs across policy, claims, and registration domains using Spring Boot and Spring Data JPA (Hibernate), reducing p95 policy retrieval latency from 1.9s to 500ms through query optimization and JPA access-path tuning.',
      'Implemented contract and claims retrieval workflows using MapStruct for DTO-entity mapping and Spring Cloud OpenFeign clients configured with Resilience4j circuit breakers, retries, timeout limiters, and fallback handlers to prevent cascading failures across microservices.',
      'Migrated legacy server-rendered JSP interfaces into a responsive React SPA using Redux Toolkit and TypeScript, integrating with Spring Boot REST APIs backed by centralized global exception handling and validation to achieve nearly 2× faster claim creation.',
      "Built an AI-powered semantic search capability to resolve inconsistent naming conventions across 20,000–50,000 enterprise records using OpenAI's text-embedding-3-small model and cosine similarity matching, improving search relevance and data retrieval accuracy.",
      'Implemented JWT/OAuth2-based endpoint security using Spring Security, wrote unit tests with JUnit and Mockito to meet SonarQube quality gates, and leveraged Claude Code and GitLab Duo to accelerate code analysis and development.',
    ],
  },
  {
    company: 'Wisenet Automation Pvt. Ltd.',
    title: 'Web Development Intern',
    date: 'Nov 2023 – Feb 2024',
    location: 'Visakhapatnam, India',
    bullets: [
      'Developed a GPS tracking dashboard using HTML, CSS, JavaScript, and Bootstrap, supporting approximately 200 users.',
      'Implemented Haversine-based distance calculations with historical tracking filters for 1 day, 1 week, and 10 days.',
      'Collaborated with the development team to deliver features based on business requirements.',
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
