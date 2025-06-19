import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-600 leading-relaxed">
              I am Arijit Das, a 2024 graduate from KIIT, with a B.Tech in Computer Science. Currently working as a Front-end Developer at Corapixel,Bengaluru
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              <div className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-blue-600"></i>
                <span className="text-slate-600">Burdwan, West Bengal</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-coffee text-blue-600"></i>
                <span className="text-slate-600">Software Development,Football</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-graduation-cap text-blue-600"></i>
                <span className="text-slate-600">Bachelor of technology,Computer science</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=800&h=600" 
              alt="Developer workspace with multiple monitors" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            
            {/* Floating stats */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-slate-600">Years of hands on coding Experience</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 border"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-600">20+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
