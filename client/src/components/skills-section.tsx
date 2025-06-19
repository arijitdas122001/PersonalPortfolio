import { motion } from "framer-motion";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "fas fa-laptop-code",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      skills: [
        { name: "React.js", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Next.js", level: "Advanced" }
      ]
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      iconColor: "text-cyan-600",
      bgColor: "bg-cyan-100",
      skills: [
        { name: "Node.js", level: "Expert" },
        { name: "Python", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" }
      ]
    },
    {
      title: "Tools & Others",
      icon: "fas fa-tools",
      iconColor: "text-violet-600",
      bgColor: "bg-violet-100",
      skills: [
        { name: "Git & GitHub", level: "Expert" },
        { name: "Docker", level: "Intermediate" },
        { name: "AWS", level: "Intermediate" },
        { name: "Figma", level: "Advanced" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${category.icon} ${category.iconColor} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="skill-hover bg-slate-50 rounded-lg p-3 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
