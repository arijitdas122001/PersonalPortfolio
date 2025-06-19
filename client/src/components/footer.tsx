import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: "fab fa-linkedin-in", href: "#" },
    { icon: "fab fa-github", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-dribbble", href: "#" }
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="font-bold text-2xl mb-4">Your Name</div>
          <p className="text-slate-400 mb-6">
            Your personal motto or tagline goes here.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a 
                key={index}
                href={social.href} 
                className="text-slate-400 hover:text-white transition-colors"
                onClick={(e) => e.preventDefault()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={`${social.icon} text-xl`}></i>
              </motion.a>
            ))}
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400 text-sm">
              © 2025 Your Name. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
