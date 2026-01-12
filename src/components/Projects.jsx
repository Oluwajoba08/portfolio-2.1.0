import React from "react"
import { motion } from "motion/react"
import invofiHomeScreen from "/invofi-home-screen.jpg"
import AvilaBuildings from "/avila-website-mockup.jpg"

const projectsData = [
  {
    id: 1,
    name: "Invofi",
    description: "Invofi is a platform that helps users to manage their payments and invoicing.",
    image: invofiHomeScreen,
    link: "https://invofi.com.ng",
  },
  {
    id: 2,
    name: "Avila Buildings",
    description: "Avila Buildings is a platform where users can find properties (houses, apartments, and commercial properties) for sale and rent.",
    image: AvilaBuildings,
    link: "#",
  },
]

const Projects = () => {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
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
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="bg-lime-accent text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#8FE000] transition-all duration-300 w-full md:w-fit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View live project
                  </button>
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
