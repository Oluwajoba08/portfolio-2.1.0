import React from "react"
import { motion } from "motion/react"

const About = () => {
  return (
    <main className="bg-dark-bg text-white">
      <div className="h-16"></div>
      <section className="min-h-screen py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.h1 className="text-5xl sm:text-6xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            About Me
          </motion.h1>
          <motion.p className="text-light-gray text-lg leading-relaxed mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Welcome to my portfolio! I'm Oluwajoba Bukola, a passionate and innovative frontend developer. With 3+ years of experience in the industry, I specialize in creating visually stunning and highly functional websites that provide an
            exceptional user experience.
          </motion.p>
          <motion.p className="text-light-gray text-lg leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            My expertise spans across frontend and fullstack development, mobile app development and modern web technologies. I'm committed to delivering pixel-perfect designs and robust, scalable solutions that help businesses achieve their digital
            goals.
          </motion.p>
        </div>
      </section>
    </main>
  )
}

export default About
