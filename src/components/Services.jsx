import React from "react"
import { motion } from "motion/react"
import Badge from "./ui/Badge"

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "I specialize in creating pixel-perfect, responsive user interfaces using modern technologies like React, Next.js, TypeScript, and Tailwind CSS. My focus is on performance, accessibility, and delivering an exceptional user experience that users love.",
      features: [
        "Responsive Design",
        "Component Libraries",
        "Performance Optimization",
        "Animation & Transitions",
        "Cross-browser Testing",
        "SEO Optimization"
      ],
      icon: "🎨"
    },
    {
      title: "Fullstack Development",
      description: "From concept to deployment, I build complete web applications. Combining modern frontend frameworks with robust backend solutions, I create scalable applications using React, Node.js, TypeScript, MongoDB, PostgreSQL, and AWS.",
      features: [
        "API Development",
        "Database Design",
        "Authentication",
        "Real-time Features",
        "Deployment & DevOps",
        "System Architecture"
      ],
      icon: "⚙️"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            The coolest Services I provide!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering exceptional digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#b4ff81]/20 to-transparent rounded-full blur-3xl -z-10"></div>

              <motion.div 
                className="text-5xl mb-6"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>

              {/* Features List */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-gray-700 mb-4">Key Features:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, fIdx) => (
                    <motion.li
                      key={fIdx}
                      className="flex items-center gap-2 text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 + fIdx * 0.05 }}
                    >
                      <span className="text-[#b4ff81] font-bold">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Learn more link */}
              <motion.a 
                href="#"
                className="inline-block text-[#b4ff81] font-semibold hover:text-green-500 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                Learn more →
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <motion.div 
          className="mt-20 pt-16 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "Tailwind CSS",
              "GraphQL",
              "AWS",
              "Docker",
              "Git"
            ].map((tech, idx) => (
              <Badge key={idx}>{tech}</Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
