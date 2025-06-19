import { motion } from "framer-motion";

const LinksSection = () => {
  const profileLinks = [
    {
      title: "GitHub",
      description: "Check out my code repositories and open source contributions",
      icon: "fab fa-github",
      iconColor: "text-gray-800",
      bgColor: "bg-gray-100",
      hoverColor: "hover:bg-gray-200",
      url: "https://github.com/yourusername",
      stats: "50+ Repositories"
    },
    {
      title: "LinkedIn",
      description: "Connect with me professionally and view my career journey",
      icon: "fab fa-linkedin-in",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      hoverColor: "hover:bg-blue-200",
      url: "https://linkedin.com/in/yourprofile",
      stats: "500+ Connections"
    },
    {
      title: "Twitter",
      description: "Follow me for tech insights, project updates, and industry thoughts",
      icon: "fab fa-twitter",
      iconColor: "text-sky-500",
      bgColor: "bg-sky-100",
      hoverColor: "hover:bg-sky-200",
      url: "https://twitter.com/yourusername",
      stats: "Tech Discussions"
    },
    {
      title: "Portfolio",
      description: "View my detailed case studies and design process",
      icon: "fas fa-briefcase",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      hoverColor: "hover:bg-purple-200",
      url: "https://yourportfolio.com",
      stats: "Featured Work"
    },
    {
      title: "Medium/Blog",
      description: "Read my technical articles and development insights",
      icon: "fab fa-medium",
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      hoverColor: "hover:bg-green-200",
      url: "https://medium.com/@yourusername",
      stats: "Tech Articles"
    },
    {
      title: "Resume/CV",
      description: "Download or view my complete professional resume",
      icon: "fas fa-file-alt",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100",
      hoverColor: "hover:bg-orange-200",
      url: "/resume.pdf",
      stats: "Download PDF"
    }
  ];

  return (
    <section id="links" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Connect With Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            Find me across the web - from code repositories to professional networks
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={(e) => e.preventDefault()} // Remove this when you add real URLs
            >
              <div className={`bg-white rounded-xl p-6 shadow-lg ${link.hoverColor} transition-all duration-300 border border-slate-200 group-hover:shadow-xl h-full`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${link.bgColor} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${link.icon} ${link.iconColor} text-xl`}></i>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700">
                        {link.title}
                      </h3>
                      <i className="fas fa-external-link-alt text-slate-400 group-hover:text-slate-600 text-sm transition-colors"></i>
                    </div>
                    
                    <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                      {link.description}
                    </p>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-slate-500 font-medium">{link.stats}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600 mb-6">
            Want to collaborate or just say hello? I'm always open to interesting conversations!
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contact');
              if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({
                  top: offsetTop,
                  behavior: "smooth"
                });
              }
            }}
          >
            Get In Touch
            <i className="fas fa-arrow-right"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LinksSection;