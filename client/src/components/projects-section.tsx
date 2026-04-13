import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Blog Application",
      description: "Blog application where a user can write blogs,read other blogs,react and comment on blogs as well.Made with NextJs implemented using Typescript and designed with TailwindCss Utilized tinyMCE as Rich-Text editor for dynamic writing experienceIntegrated NextAuth for authentication, session, and cookie management,various data schemas from MongoDb is used for dynamic,complex and nested data storing.Integrated ZOD for schema validations.Image storing, updating, fetching implemented using Cloudinary.",
      image: "https://images.unsplash.com/photo-1657638323016-b9b802f1756b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ['NextJs', 'Typescript', 'MongoDB', 'Zod', 'NextAuth', 'TailwindCss', 'Cloudinary','TinyMCE','React hook forms','Redux'],
      colors: ["bg-blue-100 text-blue-800", "bg-yellow-100 text-yellow-800", "bg-red-100 text-red-800","bg-blue-100 text-blue-800", "bg-yellow-100 text-yellow-800", "bg-red-100 text-red-800","bg-blue-100 text-blue-800","bg-blue-100 text-blue-800", "bg-yellow-100 text-yellow-800", "bg-red-100 text-red-800"],
       link: "https://blogswell.vercel.app/",
       glink:"https://github.com/arijitdas122001/NextJsBlog"
    },
    {
      title: "Hotel Booking website",
      description: "Full Stack Travel Booking website Created with MERN stack, onestop solution for travel booking.Fully functional REST api made with ExpressJs and NodeJs.Smooth ui experience made with ReactJs, real time state-management Powered by Redux , ensuring quick authentication and booking.jsonWebtoken, bcryptJs is used for secure authentication.Executed MondoDB database, implemented different collections and aggregation pipeline methods for efficient data management.Integrated Razorpay payment gateway api for smooth online, UPI and bank transactions.",
      image: "https://images.unsplash.com/photo-1499591934245-40b55745b905?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ['Javascript', 'React-Js', 'Node-Js', 'Express-js', 'MongoDB', 'CSS', 'Redux', 'Payments'],
      colors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-orange-100 text-orange-800","bg-blue-100 text-blue-800", "bg-yellow-100 text-yellow-800", "bg-red-100 text-red-800","bg-blue-100 text-blue-800", "bg-yellow-100 text-yellow"],
      link: "https://react-travelpedia.vercel.app/",
      glink:"https://github.com/arijitdas122001/React-Travelpedia"
    },
    {
      title: "E-Commerce Platform",
      description: "Online Fashion Commerce Website Created using MERN stack where anyone can shop, login, logout, register, can add to the cart and also filter the products. RestFull api made with NodeJs, ExpressJs for smooth routing experience. React ContextApi used for state management and data sharing. Implemented React styled components as an alternative library for external CSS folder imports. Integrated MongoDB as the database, mongoose for smooth database management. Integrated Stripe api as a payment gateway, for smooth transactions through card, online and others.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tech: ['React', 'NodeJs', 'ExpressJs', 'MongoDB', 'Styled-Components', 'Stripe','Payments'],
      colors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800","bg-blue-100 text-blue-800", "bg-yellow-100 text-yellow-800", "bg-red-100 text-red-800","bg-blue-100 text-blue-800"],
      link: "https://woocommerce-khaki.vercel.app/",
      glink:"https://github.com/arijitdas122001/woocommerce"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="project-card bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className={`text-xs px-2 py-1 rounded-full ${project.colors[techIndex]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.link}
                    target="_blank"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <i className="fas fa-external-link-alt mr-1"></i>Live Demo
                  </a>
                  <a 
                    href={project.glink}
                    target="_blank"
                    className="text-slate-600 hover:text-slate-700 transition-colors"
                  >
                    <i className="fab fa-github mr-1"></i>GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            onClick={(e) => e.preventDefault()}
          >
            View All Projects
            <i className="fas fa-arrow-right"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
