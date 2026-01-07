import React from "react"
import { motion } from "motion/react"
import Badge from "./Badge"

const TechStack = () => {
  const techStack = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "JavaScript", "TypeScript", "Zustand", "Redux", "Tailwind CSS"]
    },
    {
      category: "Mobile",
      technologies: ["React Native", "TypeScript", "Expo", "Redux", "Zustand"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "MongoDB", "SQL", "Supabase", "PostgreSQL", "Prisma"]
    },
    {
      category: "Tools & Others",
      technologies: ["Git", "GitHub", "Vite", "Adobe CC", "Figma"]
    }
  ]

  return (
    <section className="py-8 px-4 section-bg sm:px-6 md:p-8 lg:p-10 xl:p-12">
        <h1 className="text-2xl md:text-3xl text-center font-bold text-primary-blue mb-8">Tech Stack</h1>
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {techStack.map((stack, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-slate-50 p-6 rounded-lg shadow-xl"
            >
                <h2 className="text-xl font-bold mb-4">{stack.category}</h2>
                <div className="flex flex-wrap gap-2">
                {stack.technologies.map((tech, i) => (
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

export default TechStack