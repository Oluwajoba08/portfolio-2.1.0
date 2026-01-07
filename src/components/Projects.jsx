import React from 'react'
import { motion } from 'motion/react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Invofi",
      description: "An AI-powered invoicing and payments platform that revolutionizes how businesses manage finances. Features include automated invoice generation, real-time payment tracking, and intelligent financial analytics.",
      image: "https://via.placeholder.com/400x300?text=Invofi",
      technologies: ["React", "Node.js", "AI/ML", "Payment Gateway"],
      link: "https://invofi.com.ng",
      liveStatus: "Live"
    },
    {
      id: 2,
      title: "My Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my design and development skills. Built with React and Tailwind CSS, featuring smooth animations, scroll effects, and a beautiful user interface.",
      image: "https://via.placeholder.com/400x300?text=Portfolio",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      link: "https://andlo-portfolio.com",
      liveStatus: "Live"
    }
  ]

  return (
    <main className="bg-gray-50">
      <div className="h-12"></div>
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Recent Projects
        </motion.h1>

        <div className="flex flex-col gap-16 max-w-5xl mx-auto w-full">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              {/* Image */}
              <motion.div 
                className={`order-1 ${idx === 1 ? "lg:order-2" : ""}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <motion.div 
                      className="bg-[#b4ff81] text-black px-6 py-3 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      View Project
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div 
                className={`order-2 ${idx === 1 ? "lg:order-1" : ""}`}
                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 + 0.1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-3xl sm:text-4xl font-bold">{project.title}</h3>
                  <span className="inline-block bg-[#b4ff81] text-black text-xs font-bold px-3 py-1 rounded-full">
                    {project.liveStatus}
                  </span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <p className="text-sm font-semibold text-gray-600 mb-3">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <motion.span 
                        key={techIdx}
                        className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:from-[#b4ff81]/30 hover:to-green-100 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#b4ff81] to-green-400 text-black px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  Visit Website
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA for more projects */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-6">Want to see more of my work?</p>
          <motion.a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Check my GitHub
          </motion.a>
        </motion.div>
      </section>
    </main>
  )
}

export default Projects