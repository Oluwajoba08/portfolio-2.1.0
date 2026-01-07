import React from "react"
import { motion } from "motion/react"
import Badge from "./Badge"

const Experience = () => {
  const experience = [
    {
      role: "Frontend Developer",
      company: "InvoFi",
      period: "2024 - Present",
      description: "Led frontend development for the project, implemented responsive designs.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand"]
    },
    {
      role: "Freelance Web Developer",
      company: "Freelance",
      period: "2023 - 2024",
      description: "Developed and maintained client websites, collaborated with design teams to enhance user experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS"]
    }
  ]

  return (
    <section className="py-8 px-4 section-bg sm:px-6 md:p-8 lg:p-10 xl:p-12">
        <h1 className="text-2xl md:text-3xl text-center font-bold text-primary-blue mb-8">Work Experience</h1>
        <div className="max-w-5xl mx-auto">
            {experience.map((exp, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-8 border-l-4 border-primary-blue pl-4"
            >
                <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-bold">{exp.role}</h2>
                <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
                <h3 className="text-lg text-primary-blue mb-2">{exp.company}</h3>
                <p className="mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                    <Badge color={i === 0 ? "green" : i % 3 === 0 ? "red" : i % 2 === 0 ? "blue" : "yellow"} key={i}>
                        {tech}
                    </Badge>
                ))}
                </div>
            </motion.div>
            ))}
        </div>
    </section>
  )
}

export default Experience