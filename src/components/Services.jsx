import React from "react"
import { motion } from "motion/react"
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
      { name: "Years of experience", value: 3 },
      { name: "Completed Projects", value: 10 },
    ],
  },
  {
    id: 2,
    name: "Mobile App Development",
    description:
      "With my experience creating functional mobile applications, I can develop and deploy your mobile app tailored to meet your needs.",
    image: mobileAppMockup,
    stats: [{ name: "Years of experience", value: 2 }],
  },
  {
    id: 3,
    name: "Fullstack Development",
    description: "We develop web applications that are not only client side, but also dynamic and secure.",
    image: invofiHomeScreen,
    stats: [{ name: "Years of experience", value: 2 }],
  },
]

const EASE = [0.16, 1, 0.3, 1]

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              The coolest Services
              <br />I provide!
            </h2>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            <p className="text-gray-600 mb-6 leading-relaxed">
              Hi, I&apos;m Oluwajoba Bukola with over 3 years in web design and development. I&apos;m here to help bring your
              business to life with top-notch service.
            </p>
            <motion.button
              className="bg-lime-accent text-black px-8 py-3 rounded-lg font-bold transition-colors duration-300 hover:bg-[#8FE000]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.button>
          </motion.div>
        </div>

        {/* Service cards */}
        <div className="flex flex-col gap-4">
          {servicesData.map((service, index) => (
            <motion.article
              key={service.id}
              className="group relative rounded-2xl border border-gray-200 overflow-hidden bg-white transition-[border-color,box-shadow] duration-500 hover:border-lime-accent/70 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.25)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
            >
              <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center p-6 sm:p-8 lg:p-10">
                {/* Index */}
                <span className="hidden sm:block text-sm font-mono tabular-nums text-gray-300 group-hover:text-lime-accent transition-colors duration-500 shrink-0">
                  0{index + 1}
                </span>

                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{service.name}</h3>
                    <svg
                      className="w-5 h-5 text-lime-accent opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                  {/* Description — smooth height reveal, no JS */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                    <div className="overflow-hidden">
                      <p className="text-gray-600 leading-relaxed pt-3 pb-1 pr-2 max-w-xl">{service.description}</p>
                    </div>
                  </div>

                  {/* Stats — fade/slide in on hover */}
                  <div className="flex gap-8 mt-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:mt-4 transition-all duration-500 ease-out delay-75">
                    {service.stats.map((stat) => (
                      <div key={stat.name}>
                        <Counter styleText="text-2xl sm:text-3xl font-bold text-gray-900 mb-1" number={stat.value} />
                        <p className="text-xs text-gray-500">{stat.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image — always mounted, transitions in place */}
                <div className="relative w-full sm:w-48 lg:w-56 h-32 sm:h-32 lg:h-36 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover grayscale-[60%] scale-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-lime-accent/0 group-hover:bg-lime-accent/10 transition-colors duration-500" />
                </div>
              </div>

              {/* Growing accent underline */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-lime-accent group-hover:w-full transition-all duration-500 ease-out" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
