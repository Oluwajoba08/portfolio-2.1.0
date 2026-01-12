import React from "react"
import { motion } from "motion/react"
import Services from "./Services"
// import Projects from "./Projects"
import Testimonials from "./Testimonials"
import TextScroller from "./ui/TextScroller"
import FigmaIcon from "/figma.svg"
import NextJsIcon from "/next-js.svg"
import ExpoIcon from "/expo-go-app.svg"
import ReactIcon from "/react-logo.png"
import Counter from "./ui/Counter"

const Home = () => {
  return (
    <main className="bg-white">
      <div className="h-16"></div>

      {/* Hero Section */}
      <section className="min-h-screen pb-16 pt-0 px-4 sm:px-6 md:px-8 lg:px-12 flex relative">
        <div className="w-full max-w-7xl mx-auto bg-dark-bg rounded-3xl p-8 sm:p-12 lg:p-16 relative">
          <div className="flex flex-col lg:flex-row items-center w-full gap-8 lg:gap-16">
            {/* Left Content */}
            <motion.div className="flex flex-col justify-between pt-24 sm:pt-0">
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center lg:items-start flex-1 text-center lg:text-left">
                <motion.p className="text-lg sm:text-xl mb-4 text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  Hey 👋 I'm Oluwajoba Bukola
                </motion.p>
                <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading- sm:leading-relaxed mb-8 text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  Frontend
                  <br />
                  Developer
                </motion.h1>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mb-8">
                  <button className="bg-lime-accent text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#8FE000] transition-all duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Hire Me
                  </button>
                </motion.div>
              </motion.div>
              <motion.p className="text-neutral-400 mb-8 max-w-md leading-relaxed text-sm sm:text-base" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                Versatile Frontend Developer having 3+ years of Experience.
              </motion.p>
            </motion.div>

            {/* Right Profile Image with Overlays */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex-1"></motion.div>

            {/* Profile Image - Absolutely Positioned */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="absolute bottom-0 right-8 sm:right-12 lg:right-16 w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Profile Image */}
              <div className="w-full h-full overflow-hidden">
                <img src="/oluwajoba-image.png" alt="Oluwajoba Bukola - Frontend Developer" className="w-full h-full object-cover" style={{ borderRadius: 0, objectPosition: "bottom" }} />
              </div>

              {/* Stats Overlay - Bottom Right */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="absolute bottom-4 right-4 p-4">
                <div className="flex sm:gap-20 gap-10">
                  <div className="flex flex-col">
                    <Counter number={3} styleText="text-2xl sm:text-4xl font-bold text-white" />
                    <p className="text-xs font-light text-light-gray whitespace-nowrap">Years of experience</p>
                    <div className="w-32 h-[2px] mt-2 bg-light-gray"></div>
                  </div>
                  <div className="flex flex-col">
                    <Counter number={30} styleText="text-2xl sm:text-4xl font-bold text-white" />
                    <p className="text-xs font-light text-light-gray whitespace-nowrap">Completed Projects</p>
                    <div className="w-32 h-[2px] mt-2 bg-light-gray"></div>
                  </div>
                  <div className="flex-col hidden sm:flex">
                    <Counter number={5} styleText="text-2xl sm:text-4xl font-bold text-white" />
                    <p className="text-xs font-light text-light-gray whitespace-nowrap">Certificates</p>
                    <div className="w-32 h-[2px] mt-2 bg-light-gray"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            {/* Skills Overlay - Top Right */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} className="hidden sm:block absolute top-12 right-4 bg-dark-gray/90 backdrop-blur-sm rounded-lg p-3 border border-gray-700">
              <p className="text-xs text-light-gray mb-2">EXP in:</p>
              <div className="flex gap-2">
                <div className="w-8 h-8 p-1.5 rounded-lg hover:bg-white flex items-center justify-center">
                  <img src={ReactIcon} alt="react-icon" />
                </div>
                <div className="w-8 h-8 p-1.5 rounded-lg hover:bg-white flex items-center justify-center">
                  <img src={NextJsIcon} alt="next-icon" />
                </div>
                <div className="w-8 h-8 p-1.5 rounded-lg hover:bg-white flex items-center justify-center">
                  <img src={ExpoIcon} alt="expo-icon" />
                </div>
                <div className="w-8 h-8 p-1.5 rounded-lg hover:bg-white flex items-center justify-center">
                  <img src={FigmaIcon} alt="figma-icon" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Welcome/About Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left - Available for Work */}
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-gray-600 text-sm">(Available for Work)</p>
            </motion.div>

            {/* Right - About Text */}
            <motion.div className="lg:col-span-9" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-gray-900 text-2xl sm:text-4xl sm:[line-height:3rem] mb-6">
                Welcome to my portfolio! I'm <span className="font-semibold">Oluwajoba Bukola</span>, a <span className="font-semibold">passionate and innovative web designer and developer</span>. With{" "}
                <span className="font-semibold">3+ years of experience</span> in the industry, I specialize in creating visually stunning and highly functional websites that provide an exceptional user experience.
              </h2>
              <a href="/projects" className="inline-flex items-center gap-2 text-gray-900 hover:text-lime-accent transition-colors duration-300 underline">
                See my latest work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Projects Section */}
      {/* <Projects /> */}

      {/* Testimonials Section */}
      {/* <TextScroller text="Testimonials" /> */}
      <Testimonials />
    </main>
  )
}

export default Home
