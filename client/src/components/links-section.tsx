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
      url: "https://github.com/arijitdas122001",
      stats: "50+ Repositories"
    },
    {
      title: "Leetcode",
      description: "Solved more than 1200+ problems on data structures and algorithms",
      icon: "fa-solid fa-square-binary",
      iconColor: "text-orange-600",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-400",
      url: "https://leetcode.com/u/arijit__12/",
      stats: "Download PDF"
    },
    {
      title: "LinkedIn",
      description: "Connect with me professionally and view my career journey",
      icon: "fab fa-linkedin-in",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      hoverColor: "hover:bg-blue-200",
      url: "https://www.linkedin.com/in/arijit-das12/",
      stats: "500+ Connections"
    },
    {
      title: "Twitter",
      description: "Follow me for tech insights, project updates, and industry thoughts",
      icon: "fab fa-twitter",
      iconColor: "text-sky-500",
      bgColor: "bg-sky-100",
      hoverColor: "hover:bg-sky-200",
      url: "https://x.com/ArijitD64046633",
      stats: "Tech Discussions"
    },
    {
      title: "Portfolio",
      description: "View my detailed case studies and design process",
      icon: "fas fa-briefcase",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      hoverColor: "hover:bg-purple-200",
      url: "https://words-replace.vercel.app/",
      stats: "Featured Work"
    },
    {
      title: "Resume/CV",
      description: "Download or view my complete professional resume",
      icon: "fas fa-file-alt",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100",
      hoverColor: "hover:bg-orange-200",
      url: "https://drive.google.com/file/d/1m2tMCDXcC81tLxcIgHBu-75H-A78GNT-/view?usp=sharing",
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
            >
              <div className={`bg-white rounded-xl p-6 shadow-lg ${link.hoverColor} transition-all duration-300 border border-slate-200 group-hover:shadow-xl h-full`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${link.bgColor} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                   {link.title==="Leetcode"?<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LeetCode</title><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>:<i className={`${link.icon} ${link.iconColor} text-xl`}></i>}
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