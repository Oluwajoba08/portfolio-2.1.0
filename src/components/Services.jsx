import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import invofiHomeScreen from "/invofi-home-screen.jpg"
import avilaMockup from "/avila-website-mockup.jpg"
import mobileAppMockup from "/mobile-app-mockup.jpg"
import Counter from "./ui/Counter"

const servicesData = [
  {
    id: 1,
    name: "Frontend Development",
    description:
      "I specialize in creating dynamic and responsive user interfaces that enhance user experience and drive engagement. My services focus on understanding user needs, creating seamless interactions, and delivering designs that are both beautiful and functional across web, mobile, and software applications.",
    image: avilaMockup,
    stats: [
      {
        name: "Years of experience",
        value: 3,
      },
      {
        name: "Completed Projects",
        value: 10,
      },
    ],
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "With my experience creating functional mobile applications, I can develop and deploy your mobile app tailored to meet your needs.",
    image: mobileAppMockup,
    stats: [
      {
        name: "Years of experience",
        value: 2,
      },
    ],
  },
  {
    id: 3,
    name: "Fullstack Development",
    description: "We develop web applications that are not only client side, but also dynamic and secure. ",
    image: invofiHomeScreen,
    stats: [
      {
        name: "Years of experience",
        value: 2,
      },
    ],
  },
]

const Services = () => {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left - Heading */}
          <motion.div className="lg:col-span-5" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              The coolest Services
              <br />I provide!
            </h2>
          </motion.div>

          {/* Right - Intro */}
          <motion.div className="lg:col-span-7" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-gray-600 mb-6 leading-relaxed">Hi, I'm Oluwajoba Bukola with over 3 years in web design and development. I'm here to help bring your business to life with top-notch service.</p>
            <button className="bg-lime-accent text-black px-8 py-3 rounded-lg font-bold hover:bg-[#8FE000] transition-all duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Hire Me
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* UI/UX Design Service Card */}
          {servicesData.map((service) => (
            <motion.div
              layout
              key={service.id}
              className={`rounded-2xl border border-gray-200 relative overflow-hidden transition-all duration-300 ${hoveredId === service.id ? "p-8 lg:p-12" : "px-3 py-3 lg:px-6 lg:py-4"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* <div className="flex gap-8 items-center w-full justify-between"> */}
              {/* Left Content */}
              <div className="flex flex-col sm:flex-row gap-8 items-stretch">
                <div className="flex flex-col w-full">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{service.name}</h3>
                    <AnimatePresence initial={false}>
                      {hoveredId !== service.id && <motion.img key={service.id + "initial-image"} className="w-40 h-24 object-cover rounded-[48px]" src={service.image} alt="image" animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} />}
                    </AnimatePresence>
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-gray-300 cursor-pointer hover:bg-gray-100">
                      <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>

                  {/* <h4 className="text-xl font-semibold text-gray-900 mb-4">Corporate Website Landing Page</h4> */}
                  <AnimatePresence initial={false}>
                    {hoveredId === service.id && (
                      <motion.p key={service.id + "description"} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="text-gray-600 mt-4 mb-10 leading-relaxed justify-between">
                        {service.description}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <AnimatePresence initial={false}>
                    {hoveredId === service.id && (
                      <motion.div key={service.id + "stats"} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="flex gap-4 items-center justify-between">
                        <div className="text-center">
                          <Counter styleText={"text-2xl sm:text-3xl font-bold text-gray-900 mb-1"} number={service.stats[0].value} />
                          <p className="text-xs text-gray-600">{service.stats[0].name}</p>
                        </div>
                        {service.stats.length > 1 && (
                          <div className="text-center">
                            <Counter styleText={"text-2xl sm:text-3xl font-bold text-gray-900 mb-1"} number={service.stats[1].value} />
                            <p className="text-xs text-gray-600">{service.stats[1].name}</p>
                          </div>
                        )}
                        {service.stats.length > 2 && (
                          <div className="text-center">
                            <Counter styleText={"text-2xl sm:text-3xl font-bold text-gray-900 mb-1"} number={service.stats[2].value} />
                            <p className="text-xs text-gray-600">{service.stats[2].name}</p>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <AnimatePresence initial={false}>
                  {hoveredId === service.id && (
                    <motion.img
                      key={service.id + "image"}
                      className="w-1/2 h-[calc(100vh-18rem)] object-cover rounded-2xl"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      src={service.image}
                      alt="image"
                    />
                  )}
                </AnimatePresence>
              </div>
              {/* </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
