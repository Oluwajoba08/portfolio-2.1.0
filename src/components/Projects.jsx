import React from "react"
import { motion } from "motion/react"
import invofiHomeScreen from "/invofi-home-screen.jpg"
import ResavationRecap from "/resavation-recap.jpg"
import VproofLandingPage from "/vproof-landing-closeup.jpg"
import AvilaBuildings from "/avila-website-mockup.jpg"
import Framesbook from "/framesbook-2.png"
import TextScroller from "./ui/TextScroller"

const projectsData = [
  {
    id: 1,
    name: "Invofi",
    description: "Invofi is a platform that helps business owners to manage payments, invoicing, monitor business analytics and track growth.",
    image: invofiHomeScreen,
    link: "https://useinvofi.com",
  },
  {
    id: 2,
    name: "Resavation App",
    description: "Resavation is a platform that helps students to find affordable and condusive homes around campus.",
    image: ResavationRecap,
    link: "https://resavation.com",
  },
  {
    id: 3,
    name: "Vproof",
    description:
      "Vproof is a verification layer built to eliminate transfer fraud with AI by using vScore: A trust score given based on submitted documents and credentials. This also helps small-scale businesses to obtain loans from financial institutions without the hassle.",
    image: VproofLandingPage,
    link: "https://invofi-squadco.vercel.app",
  },
  {
    id: 4,
    name: "Framesbook",
    description: "Framesbook is a clone of the popular social media app, Facebook. Users can find friends, send messages to loved ones, share photos, videos and stories.",
    image: Framesbook,
    link: "#",
  },
  {
    id: 5,
    name: "Avila Buildings",
    description: "Avila Buildings is a platform where users can find properties (houses, apartments, and commercial properties) for sale and rent.",
    image: AvilaBuildings,
    link: "#",
  },
]

const EASE = [0.16, 1, 0.3, 1]

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
      <TextScroller text="PROJECTS" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 mt-4">
          {projectsData.map((project, index) => {
            const isLive = project.link && project.link !== "#"
            const reversed = index % 2 === 1

            return (
              <motion.div
                key={project.id}
                className="group rounded-2xl p-6 md:p-8 lg:p-12 border border-gray-200 relative overflow-hidden transition-colors duration-500 hover:border-lime-accent/70"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: index * 0.06, ease: EASE }}
              >
                <div className={`flex flex-col-reverse gap-8 items-stretch ${reversed ? "md:flex-row-reverse" : "md:flex-row"}`}>
                  {/* Text content */}
                  <div className="flex flex-col justify-center w-full md:w-1/2">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{project.name}</h3>
                      {isLive && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.name} in a new tab`}
                          className="w-8 h-8 shrink-0 bg-white rounded-lg flex items-center justify-center border border-gray-300 transition-all duration-300 hover:bg-lime-accent hover:border-lime-accent hover:rotate-45"
                        >
                          <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>

                    <p className="text-gray-600 mt-4 mb-10 leading-relaxed">{project.description}</p>

                    {isLive ? (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/cta inline-flex items-center justify-center gap-2 bg-lime-accent text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-300 hover:bg-[#8FE000] w-full md:w-fit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View live project
                        <svg
                          className="w-4 h-4 -translate-x-1 opacity-0 group-hover/cta:translate-x-0 group-hover/cta:opacity-100 transition-all duration-300 ease-out"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.a>
                    ) : (
                      <span className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-400 px-8 py-3 rounded-lg font-semibold w-full md:w-fit cursor-default select-none">
                        Coming soon
                      </span>
                    )}
                  </div>

                  {/* Image */}
                  <div className="relative w-full md:w-1/2 h-64 md:h-[calc(100vh-18rem)] rounded-2xl overflow-hidden">
                    <motion.img
                      className="w-full h-full object-cover"
                      src={project.image}
                      alt={project.name}
                      initial={{ scale: 1.12, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.9, delay: index * 0.06 + 0.1, ease: EASE }}
                    />
                    <div className="absolute inset-0 bg-lime-accent/0 group-hover:bg-lime-accent/10 transition-colors duration-500 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
