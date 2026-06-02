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
    description: "Vproof is a verification layer built to eliminate transfer fraud with AI by using vScore: A trust score given based on submitted documents and credentials. This also helps small-scale businesses to obtain loans from financial institutions without the hassle.",
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

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
      <TextScroller text="PROJECTS" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-4">
          {projectsData.map((project) => (
            <motion.div key={project.id} className="rounded-2xl p-6 md:p-8 lg:p-12 border border-gray-200 relative overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              {/* <div className="flex gap-8 items-center w-full justify-between"> */}
              {/* Left Content */}
              <div className="flex flex-col-reverse md:flex-row gap-8 items-stretch">
                <div className="flex flex-col justify-center w-full md:w-1/2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{project.name}</h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-gray-300 cursor-pointer hover:bg-gray-100">
                      <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>

                  <p className="text-gray-600 mt-4 mb-10 leading-relaxed justify-between">{project.description}</p>
                  <motion.a
                    // onClick={() => window.open(project.link, "_blank")}
                    href={project.link}
                    target="_blank"
                    className="bg-lime-accent text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#8FE000] transition-all duration-300 w-full md:w-fit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View live project
                  </motion.a>
                </div>
                <img className="w-full md:w-1/2 h-64 md:h-[calc(100vh-18rem)] object-cover rounded-2xl" src={project.image} alt="image" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
