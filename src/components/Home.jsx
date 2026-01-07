import React, { useRef, useEffect, useState } from "react"
import { motion } from "motion/react"
import Button from "./ui/Button"
import Services from "./Services"
import Projects from "./Projects"

const Home = () => {
  const heroRef = useRef(null)
  const [textColor, setTextColor] = useState("text-black")

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const scrollPercentage = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
        
        if (scrollPercentage > 0.5) {
          setTextColor("text-gray-600")
        } else {
          setTextColor("text-black")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-white">
      <div className="h-12"></div>
      
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen py-16 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center w-full gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start flex-1 text-center lg:text-left"
          >
            <motion.p 
              className={`text-lg sm:text-xl font-semibold mb-2 transition-colors duration-300 ${textColor}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hey 👋 I'm Andlo
            </motion.p>
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 transition-colors duration-300"
              style={{
                background: "linear-gradient(to bottom, #000 0%, #000 50%, #999 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Designer & Developer
            </motion.h1>
            
            <motion.div 
              className="flex gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold">10+</p>
                  <p className="text-sm text-gray-600">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold">2k+</p>
                  <p className="text-sm text-gray-600">Community</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold">140+</p>
                  <p className="text-sm text-gray-600">Connections</p>
                </div>
              </div>
            </motion.div>

            <motion.p 
              className="text-gray-700 mb-8 max-w-md leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Welcome to my portfolio! I'm Andlo, a passionate and innovative web designer and developer based in Lagos with over 5 years of experience in the industry. I specialize in creating visually stunning and highly functional websites that provide an exceptional user experience.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button>View my work</Button>
            </motion.div>
          </motion.div>

          {/* Right Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-100 hover:scale-105 transition-transform duration-300">
              <img 
                src="https://via.placeholder.com/400x400?text=Profile+Image" 
                alt="Andlo - Designer & Developer" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Intro */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Others Say About Me
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Client Name",
                role: "Startup Founder",
                feedback: "Andlo delivered an exceptional website that exceeded our expectations. Highly professional!",
                image: "https://via.placeholder.com/100"
              },
              {
                name: "Another Client",
                role: "Business Owner",
                feedback: "The design was pixel-perfect and the functionality is flawless. Great communication throughout.",
                image: "https://via.placeholder.com/100"
              },
              {
                name: "Third Client",
                role: "Marketing Manager",
                feedback: "Outstanding work! The attention to detail and creative approach really impressed us.",
                image: "https://via.placeholder.com/100"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <p className="text-gray-600 mb-6 italic">{item.feedback}</p>
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Projects Section */}
      <Projects />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to bring your ideas to life?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let's collaborate and create something amazing together. Get in touch today!
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="/contact" className="inline-block bg-gradient-to-r from-[#b4ff81] to-[#90ee90] text-black px-8 py-3 rounded-full font-bold hover:shadow-lg transition-shadow duration-300">
              Start a project
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Home
