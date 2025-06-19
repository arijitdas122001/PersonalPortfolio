import { motion } from "framer-motion";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Hansa Solutions India Pvt Ltd",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face", // Replace with actual company logo
      position: "Software Developer",
      type: "Full-time",
      duration: "Sep 2024 - Present",
      period: "10 mos",
      location: "Hyderabad, Telangana, India",
      technologies: ["ASP.NET Core"],
      description: "Developing scalable web applications using ASP.NET Core framework. Working on enterprise-level solutions with focus on performance optimization and clean architecture patterns.",
      achievements: [
        "Built robust backend APIs serving 10,000+ daily users",
        "Implemented efficient database queries reducing response time by 40%",
        "Collaborated with cross-functional teams on feature development"
      ]
    },
    {
      company: "Hansa Solutions India Pvt Ltd",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face", // Replace with actual company logo
      position: "Trainee - Software Developer",
      type: "Internship",
      duration: "Mar 2024 - Aug 2024",
      period: "6 mos",
      location: "On-site",
      technologies: ["C#", ".NET", "SQL Server"],
      description: "Intensive training program focusing on software development fundamentals and modern development practices. Gained hands-on experience with enterprise development tools and methodologies.",
      achievements: [
        "Completed comprehensive training in .NET ecosystem",
        "Developed training projects with 95% code quality score",
        "Contributed to internal tools and automation scripts"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            My journey in software development and the impact I've made at each role
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.position}-${index}`}
                className="relative flex gap-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot and logo */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full border-4 border-blue-200 flex items-center justify-center relative z-10">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  {/* Connecting line to timeline */}
                  <div className="absolute top-8 left-8 w-8 h-0.5 bg-blue-200"></div>
                </div>

                {/* Experience content */}
                <div className="flex-1 bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.position}</h3>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                      <i className="fas fa-building text-sm"></i>
                      <span>{exp.company}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-3">
                      <div className="flex items-center gap-1">
                        <i className="fas fa-briefcase"></i>
                        <span>{exp.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <i className="fas fa-calendar-alt"></i>
                        <span>{exp.duration} • {exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-700 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-600">
                          <i className="fas fa-check-circle text-green-500 text-sm mt-1 flex-shrink-0"></i>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career summary */}
        <motion.div 
          className="mt-16 text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">1.5+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-600 mb-2">ASP.NET</div>
              <div className="text-slate-600">Core Expertise</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">Enterprise</div>
              <div className="text-slate-600">Level Projects</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;