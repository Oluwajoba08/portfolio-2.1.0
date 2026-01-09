import React from 'react'
import { motion } from 'motion/react'

const Blog = () => {
  return (
    <main className="bg-dark-bg text-white">
      <div className="h-16"></div>
      <section className="min-h-screen py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl sm:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Blog
          </motion.h1>
          <motion.p 
            className="text-light-gray text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Coming soon! Check back for articles on web development, design trends, and tech insights.
          </motion.p>
        </div>
      </section>
    </main>
  )
}

export default Blog
